import Image from "next/image";
import type { Project } from "@/content/projects";

const palettes = {
  tender: "#e5ebe1",
  slack: "#e9e3ed",
  blink: "#dfe8ee",
  barber: "#ead8ca",
  expenses: "#ede7d3",
  smartbite: "#dfe9d9",
};

function Check({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="7" fill="#dceadd" />
      <path d="m-3 0 2 2 4-4" fill="none" stroke="#356346" strokeWidth="1.5" />
    </g>
  );
}

export function ProjectCover({ project }: { project: Project }) {
  if (project.image)
    return (
      <div className="project-cover">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1050px) 50vw, 33vw"
        />
      </div>
    );
  return (
    <div
      className="project-cover"
      style={{ backgroundColor: palettes[project.cover] }}
    >
      <svg
        viewBox="0 0 560 340"
        role="img"
        aria-label={`${project.title}: designed product illustration`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="560" height="340" fill={palettes[project.cover]} />
        <g fontFamily="Arial, sans-serif">
          {project.cover === "tender" && (
            <>
              <path
                d="M0 290 560 70M0 340 560 120M0 240 560 20"
                stroke="#cdd8c8"
                strokeWidth="1"
              />
              <g transform="translate(52 55) rotate(-5 100 90)">
                <rect
                  width="204"
                  height="218"
                  rx="9"
                  fill="#fafbf7"
                  stroke="#bec9b8"
                />
                <path d="M0 34H204" stroke="#d9dfd3" />
                <circle cx="16" cy="17" r="3" fill="#8b9e81" />
                <text x="28" y="21" fontSize="9" fill="#53644d">
                  TENDER EXPLORER
                </text>
                <text
                  x="18"
                  y="64"
                  fontSize="12"
                  fill="#263d2e"
                  fontWeight="bold"
                >
                  Find. Extract. Repeat.
                </text>
                {[88, 125, 162].map((y) => (
                  <g key={y}>
                    <rect
                      x="16"
                      y={y}
                      width="170"
                      height="27"
                      rx="4"
                      fill="#edf1e7"
                    />
                    <path d={`M27 ${y + 8}h11m-11 5h18`} stroke="#8b9e81" />
                    <path d={`M59 ${y + 9}h78m-78 6h51`} stroke="#a9b4a0" />
                  </g>
                ))}
              </g>
              <g transform="translate(248 104) rotate(4 125 80)">
                <rect width="267" height="175" rx="9" fill="#263c31" />
                <circle cx="17" cy="17" r="3" fill="#9cae99" />
                <circle cx="29" cy="17" r="3" fill="#9cae99" />
                <circle cx="41" cy="17" r="3" fill="#9cae99" />
                <text
                  x="19"
                  y="54"
                  fill="#f2f3e9"
                  fontSize="11"
                  fontFamily="monospace"
                >
                  $ agent.run(website)
                </text>
                <g fill="#b8cdb2" fontSize="10" fontFamily="monospace">
                  <text x="19" y="81">
                    ↳ exploring tender list
                  </text>
                  <text x="19" y="102">
                    ↳ writing recipe
                  </text>
                  <text x="19" y="123">
                    ↳ testing &amp; repairing
                  </text>
                </g>
                <rect
                  x="18"
                  y="141"
                  width="174"
                  height="21"
                  rx="4"
                  fill="#3d5742"
                />
                <text
                  x="27"
                  y="155"
                  fill="#e3edd6"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  recipe ready for approval
                </text>
              </g>
            </>
          )}
          {project.cover === "slack" && (
            <>
              <circle cx="280" cy="170" r="140" fill="none" stroke="#d6cddc" />
              <circle cx="280" cy="170" r="108" fill="none" stroke="#d6cddc" />
              <g transform="translate(56 66) rotate(-4 140 75)">
                <rect
                  width="303"
                  height="153"
                  rx="10"
                  fill="#fcf9fd"
                  stroke="#d5c9da"
                />
                <rect width="303" height="34" rx="10" fill="#f3edf5" />
                <text x="17" y="22" fontSize="11" fill="#66516d">
                  # people-operations
                </text>
                <rect
                  x="17"
                  y="52"
                  width="29"
                  height="29"
                  rx="8"
                  fill="#8b7195"
                />
                <path d="M26 62h11m-11 7h7" stroke="#f9f2fb" strokeWidth="2" />
                <text
                  x="57"
                  y="64"
                  fontSize="10"
                  fill="#66516d"
                  fontWeight="bold"
                >
                  HR
                </text>
                <text x="57" y="83" fontSize="11" fill="#423849">
                  @agent onboard our new joiner
                </text>
                <path
                  d="M57 105h199m-199 10h151"
                  stroke="#dcd2e1"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </g>
              <g transform="translate(256 158) rotate(5 118 68)">
                <rect
                  width="247"
                  height="130"
                  rx="10"
                  fill="#fffefa"
                  stroke="#cdc5cb"
                />
                <text
                  x="20"
                  y="27"
                  fontSize="12"
                  fill="#423849"
                  fontWeight="bold"
                >
                  A warm welcome. All set.
                </text>
                {[
                  "Company email created",
                  "Slack invitation sent",
                  "Onboarding details emailed",
                ].map((s, i) => (
                  <g key={s}>
                    <Check x={25} y={51 + i * 27} />
                    <text x="42" y={55 + i * 27} fontSize="10" fill="#655d69">
                      {s}
                    </text>
                  </g>
                ))}
              </g>
            </>
          )}
          {project.cover === "blink" && (
            <>
              <path
                d="M48 0v340M128 0v340M208 0v340M288 0v340M368 0v340M448 0v340M528 0v340M0 60h560M0 140h560M0 220h560M0 300h560"
                stroke="#cddbe4"
              />
              <g transform="translate(66 45) rotate(-3 210 113)">
                <rect
                  width="430"
                  height="229"
                  rx="10"
                  fill="#fafcfb"
                  stroke="#b9cbd7"
                />
                <path d="M0 30h430" stroke="#d3dfe5" />
                <circle cx="16" cy="15" r="3" fill="#b7c7cf" />
                <circle cx="27" cy="15" r="3" fill="#b7c7cf" />
                <circle cx="38" cy="15" r="3" fill="#b7c7cf" />
                <text x="187" y="19" fontSize="10" fill="#627883">
                  blink
                </text>
                <path d="M174 31v198" stroke="#d3dfe5" />
                <g fill="#6a8a9c" fontFamily="monospace" fontSize="10">
                  <text x="17" y="64">
                    const idea = prompt;
                  </text>
                  <text x="17" y="86">
                    async function build()
                  </text>
                  <text x="28" y="108">
                    stream(idea);
                  </text>
                  <text x="28" y="130">
                    render(app);
                  </text>
                  <text x="17" y="152">
                    {"// make it yours"}
                  </text>
                </g>
                <rect
                  x="194"
                  y="50"
                  width="216"
                  height="158"
                  rx="6"
                  fill="#efbd65"
                />
                <circle cx="302" cy="116" r="35" fill="#f7e2a7" />
                <path d="m310 85-31 37h20l-8 30 33-41h-21Z" fill="#3c5260" />
                <rect
                  x="265"
                  y="168"
                  width="77"
                  height="18"
                  rx="9"
                  fill="#3c5260"
                />
                <text x="286" y="180" fontSize="9" fill="#fff8e6">
                  Let’s play
                </text>
              </g>
              <g transform="translate(112 264)">
                <rect
                  width="337"
                  height="38"
                  rx="19"
                  fill="#fffefa"
                  stroke="#b9cbd7"
                />
                <text x="19" y="24" fontSize="11" fill="#526c7b">
                  Make a little game about catching stars
                </text>
                <circle cx="315" cy="19" r="12" fill="#3c5260" />
                <path d="m311 19 4-4 4 4m-4-4v9" fill="none" stroke="#fff" />
              </g>
            </>
          )}
          {project.cover === "barber" && (
            <>
              <path
                d="M0 280 560 90M0 310 560 120M0 340 560 150"
                stroke="#dac3b1"
              />
              <circle cx="456" cy="72" r="90" fill="#e2c9b6" />
              <g transform="translate(53 48) rotate(-4 156 120)">
                <rect
                  width="317"
                  height="243"
                  rx="8"
                  fill="#fffaf1"
                  stroke="#cdb49e"
                />
                <text
                  x="22"
                  y="33"
                  fontFamily="Georgia, serif"
                  fontSize="20"
                  fill="#48362a"
                >
                  Royal Barber
                </text>
                <path d="M21 48h274" stroke="#e1d4c5" />
                <text x="22" y="72" fontSize="10" fill="#826b59">
                  CHOOSE YOUR TIME
                </text>
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <text
                    key={i}
                    x={26 + i * 40}
                    y="98"
                    fontSize="9"
                    fill="#826b59"
                  >
                    {d}
                  </text>
                ))}
                {Array.from({ length: 21 }, (_, i) => (
                  <g key={i}>
                    <rect
                      x={17 + (i % 7) * 40}
                      y={109 + Math.floor(i / 7) * 36}
                      width="33"
                      height="29"
                      rx="4"
                      fill={i === 10 ? "#8b4f35" : "#f3ece1"}
                    />
                    <text
                      x={29 + (i % 7) * 40}
                      y={128 + Math.floor(i / 7) * 36}
                      fontSize="10"
                      fill={i === 10 ? "#fff" : "#76614f"}
                    >
                      {i + 1}
                    </text>
                  </g>
                ))}
              </g>
              <g transform="translate(328 136) rotate(7 84 80)">
                <rect width="177" height="150" rx="8" fill="#473a2f" />
                <path
                  d="M15 46h147M15 111h147"
                  stroke="#776353"
                  strokeDasharray="3 4"
                />
                <text
                  x="20"
                  y="29"
                  fill="#d9c2a3"
                  fontSize="9"
                  letterSpacing="2"
                >
                  YOUR APPOINTMENT
                </text>
                <text
                  x="20"
                  y="77"
                  fill="#fff3df"
                  fontSize="24"
                  fontFamily="Georgia, serif"
                >
                  A little time
                </text>
                <text
                  x="20"
                  y="99"
                  fill="#fff3df"
                  fontSize="24"
                  fontFamily="Georgia, serif"
                >
                  for yourself.
                </text>
                <text x="20" y="133" fill="#d9c2a3" fontSize="10">
                  BOOKED &amp; CONFIRMED
                </text>
              </g>
            </>
          )}
          {project.cover === "expenses" && (
            <>
              <circle cx="77" cy="255" r="120" fill="#e4dbb9" />
              <path
                d="M400 0v340M430 0v340M460 0v340M490 0v340M520 0v340"
                stroke="#e0d6b7"
              />
              <g transform="translate(62 64) rotate(-6 100 110)">
                <rect
                  width="201"
                  height="223"
                  rx="5"
                  fill="#faf8ee"
                  stroke="#d1c59e"
                />
                <text
                  x="20"
                  y="30"
                  fontSize="11"
                  fill="#716344"
                  letterSpacing="1"
                >
                  BANK EXPORT .CSV
                </text>
                <path d="M20 44h160" stroke="#d8cdae" />
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <g key={i}>
                    <text
                      x="20"
                      y={67 + i * 26}
                      fill="#9c8e6b"
                      fontFamily="monospace"
                      fontSize="9"
                    >{`0${i + 1}, transfer, …`}</text>
                    <path d={`M20 ${75 + i * 26}h160`} stroke="#e9e0c9" />
                  </g>
                ))}
              </g>
              <g transform="translate(225 86) rotate(4 143 98)">
                <rect
                  width="283"
                  height="195"
                  rx="10"
                  fill="#fffdf6"
                  stroke="#c8bc95"
                />
                <text
                  x="20"
                  y="29"
                  fill="#4f4936"
                  fontWeight="bold"
                  fontSize="13"
                >
                  A second look, before you split.
                </text>
                <path d="M20 46h243" stroke="#e7dec5" />
                <Check x={27} y={70} />
                <text x="44" y="74" fontSize="10" fill="#6c674f">
                  Transactions imported
                </text>
                <rect
                  x="18"
                  y="92"
                  width="247"
                  height="45"
                  rx="5"
                  fill="#f4e8cb"
                />
                <path d="m31 102 8 18H23Z" fill="none" stroke="#896723" />
                <text x="49" y="110" fontSize="10" fill="#745b29">
                  Possible duplicate
                </text>
                <text x="49" y="125" fontSize="9" fill="#745b29">
                  Your approval needed
                </text>
                <rect
                  x="156"
                  y="153"
                  width="108"
                  height="24"
                  rx="12"
                  fill="#6a6c44"
                />
                <text x="174" y="169" fontSize="10" fill="#fffdf0">
                  Review entries
                </text>
              </g>
            </>
          )}
          {project.cover === "smartbite" && (
            <>
              <circle cx="160" cy="180" r="124" fill="#cfdcbe" />
              <circle
                cx="160"
                cy="180"
                r="96"
                fill="#f4f3e7"
                stroke="#b2c4a0"
                strokeWidth="2"
              />
              <circle cx="160" cy="180" r="73" fill="#e8e8d4" />
              <path
                d="M113 160c-29-33 6-59 27-33 8-39 45-22 33 6 37-14 50 26 16 35 20 31-14 51-33 22-19 28-53 5-27-23Z"
                fill="#67834d"
              />
              <path
                d="m149 141 22 54m-47-43 51 16"
                stroke="#a5b782"
                strokeWidth="3"
              />
              <ellipse
                cx="136"
                cy="208"
                rx="24"
                ry="12"
                transform="rotate(25 136 208)"
                fill="#c98d55"
              />
              <ellipse
                cx="185"
                cy="197"
                rx="17"
                ry="25"
                transform="rotate(34 185 197)"
                fill="#d4b479"
              />
              <circle cx="121" cy="177" r="9" fill="#b75b3e" />
              <circle cx="180" cy="148" r="8" fill="#b75b3e" />
              <g transform="translate(306 25) rotate(7 87 145)">
                <rect width="174" height="295" rx="25" fill="#324b37" />
                <rect
                  x="7"
                  y="7"
                  width="160"
                  height="281"
                  rx="20"
                  fill="#fafbf2"
                />
                <rect
                  x="62"
                  y="13"
                  width="50"
                  height="10"
                  rx="5"
                  fill="#324b37"
                />
                <text
                  x="21"
                  y="52"
                  fontFamily="Georgia, serif"
                  fontSize="21"
                  fill="#324b37"
                >
                  SmartBite
                </text>
                <text x="21" y="73" fontSize="9" fill="#758264">
                  A little closer to your goal.
                </text>
                <circle
                  cx="87"
                  cy="132"
                  r="38"
                  fill="none"
                  stroke="#e0e8d4"
                  strokeWidth="8"
                />
                <path
                  d="M87 94a38 38 0 1 1-36 51"
                  fill="none"
                  stroke="#7d975d"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="m76 132 7 7 16-17"
                  stroke="#607e44"
                  strokeWidth="3"
                  fill="none"
                />
                <text x="21" y="197" fontSize="10" fill="#324b37">
                  Today’s nutrition
                </text>
                {[94, 69, 108].map((w, i) => (
                  <g key={i}>
                    <rect
                      x="21"
                      y={211 + i * 19}
                      width="132"
                      height="6"
                      rx="3"
                      fill="#e4e9db"
                    />
                    <rect
                      x="21"
                      y={211 + i * 19}
                      width={w}
                      height="6"
                      rx="3"
                      fill={["#7d975d", "#c1ab76", "#b58260"][i]}
                    />
                  </g>
                ))}
              </g>
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
