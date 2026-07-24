"use client"

import { skillCategories } from "@/config/skills"

export function SkillCarousel() {
  return (
    <section className="demo-carousel relative z-10 mt-32 md:mt-48">
      <div className="demo-carousel__sticky">
        <div className="demo-carousel__center">
          <div className="wrapper" style={{ "--cards": skillCategories.length } as React.CSSProperties}>
            {skillCategories.map((cat, i) => (
              <div key={i} data-title={cat.title}>
                <ul className="card-skills">
                  {cat.skills.map((skill, j) => {
                    const positions = [
                      { x1: 1, x2: 3, y1: 1, y2: 2 },
                      { x1: 3, x2: 5, y1: 1, y2: 2 },
                      { x1: 1, x2: 2, y1: 2, y2: 3 },
                      { x1: 2, x2: 4, y1: 2, y2: 3 },
                      { x1: 4, x2: 5, y1: 2, y2: 3 },
                      { x1: 1, x2: 3, y1: 3, y2: 4 },
                      { x1: 3, x2: 4, y1: 3, y2: 4 },
                      { x1: 4, x2: 5, y1: 3, y2: 4 },
                    ]
                    const g = positions[j] ?? { x1: 1, x2: 2, y1: 1, y2: 2 }
                    return (
                      <li
                        key={skill}
                        className="flex items-center justify-center rounded-lg bg-muted/30 border border-border/50 text-[11px] font-medium text-muted-foreground p-2 text-center leading-tight"
                        style={{ "--x1": g.x1, "--x2": g.x2, "--y1": g.y1, "--y2": g.y2 } as React.CSSProperties}
                      >
                        {skill}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mouse"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
            <path d="M12 7l0 4" />
            <path d="M8 26l4 4l4 -4">
              <animateTransform
                attributeType="XML"
                attributeName="transform"
                type="translate"
                values="0 0; 0 4; 0 0"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>
    </section>
  )
}
