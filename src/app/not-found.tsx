import Link from "next/link";
import { Arrow } from "@/components/icons";

export default function NotFound() {
  return (
    <main id="main" className="container not-found">
      <p className="eyebrow">404 · Page not found</p>
      <h1>A loose end.</h1>
      <p>This page doesn’t exist. There’s still plenty of work to explore.</p>
      <Link href="/" className="button">
        Back to home
        <Arrow />
      </Link>
    </main>
  );
}
