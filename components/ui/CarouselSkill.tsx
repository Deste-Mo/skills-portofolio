"use client"

interface CarouselSkillItem {
  title: string
  content: React.ReactNode
}

interface CarouselSkillProps {
  items: CarouselSkillItem[]
  className?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  hideMouse?: boolean
}

export function CarouselSkill({ items, className, header, footer, hideMouse }: CarouselSkillProps) {
  return (
    <section className={`carousel-section${className ? " " + className : ""}`}>
      <div className="carousel-section__sticky">
        {header && <div className="carousel-section__header">{header}</div>}

        <div className="carousel-section__center">
          <div className="carousel-wrapper" style={{ "--cards": items.length } as React.CSSProperties}>
            {items.map((item, i) => (
              <div key={i} data-title={item.title} className="carousel-card">
                {item.content}
              </div>
            ))}
          </div>
        </div>

        {!hideMouse && (
          <div className="carousel-mouse" aria-hidden="true">
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
              className="mouse-icon"
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
        )}

        {footer && <div className="carousel-section__footer">{footer}</div>}
      </div>
    </section>
  )
}
