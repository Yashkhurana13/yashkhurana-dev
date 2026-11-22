import assert from "node:assert/strict";
import { test } from "node:test";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { projects } from "../src/content/projects.ts";
import { profileLinks, site } from "../src/content/site.ts";

test("all six projects have complete, unique, valid content", () => {
  assert.equal(projects.length, 6);
  assert.equal(
    new Set(projects.map((project) => project.slug)).size,
    projects.length,
  );
  assert.deepEqual(
    projects.map((project) => project.slug),
    [
      "tender-agent",
      "slack-hr-agent",
      "blink",
      "royal-barber",
      "shared-expenses",
      "smartbite",
    ],
  );
  for (const project of projects) {
    for (const key of [
      "slug",
      "title",
      "category",
      "tag",
      "summary",
      "cover",
    ] as const)
      assert.ok(project[key].trim(), `${project.slug}: ${key} is required`);
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(["ai", "web", "mobile"].includes(project.category));
    assert.ok(
      ["tender", "slack", "blink", "barber", "expenses", "smartbite"].includes(
        project.cover,
      ),
    );
    assert.ok(
      project.tech.length > 0 && project.tech.every((tech) => tech.trim()),
    );
    assert.equal(typeof project.demoUrl, "string");
    assert.equal(typeof project.image, "string");
    for (const url of [project.githubUrl, project.demoUrl].filter(Boolean))
      assert.equal(new URL(url!).protocol, "https:");
    const detail = project.caseStudy ?? project.details;
    assert.ok(detail, `${project.slug} needs a detail page`);
    for (const key of ["problem", "built", "how", "results"] as const)
      assert.ok(detail[key].length, `${project.slug}: ${key} is required`);
  }
  for (const project of projects.slice(0, 2)) {
    assert.ok(project.caseStudy);
    assert.ok(Array.isArray(project.caseStudy.how));
    assert.equal(project.githubUrl, undefined);
  }
});

test("published content excludes private names and excluded subjects", () => {
  // Private terms live in an untracked file (.private/forbidden-terms.txt, one per line).
  const termsFile = ".private/forbidden-terms.txt";
  if (!existsSync(termsFile)) return;
  const terms = readFileSync(termsFile, "utf8").split("\n").map((t) => t.trim()).filter(Boolean);
  if (terms.length === 0) return;
  const forbidden = new RegExp(terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "i");
  assert.doesNotMatch(JSON.stringify({ site, projects }), forbidden);
  function scan(directory: string) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) scan(path);
      else if (/\.(ts|tsx)$/.test(entry.name))
        assert.doesNotMatch(readFileSync(path, "utf8"), forbidden, path);
    }
  }
  scan("src");
});

test("empty profile URLs stay hidden and contact is configured", () => {
  assert.equal(site.upworkUrl, "");
  assert.equal(site.fiverrUrl, "");
  assert.deepEqual(
    profileLinks().map((link) => link.label),
    ["Email", "GitHub", "LinkedIn"],
  );
  assert.equal(site.emailUrl, `mailto:${site.email}?subject=Project%20enquiry`);
});
