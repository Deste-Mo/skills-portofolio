"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { skillCategories } from "@/config/skills"

// ─── données par catégorie ────────────────────────────────────────────────────

const categoryAccent: Record<string, string> = {
  "Langages":                  "#6d28d9",
  "Frontend":                  "#0e7490",
  "Backend":                   "#065f46",
  "Bases de données & Design": "#9d174d",
  "Outils / DevOps":           "#92400e",
}

// Couleur du texte des tech pills (assortie au gradient)
const categoryPillText: Record<string, string> = {
  "Langages":                  "#4c1d95",
  "Frontend":                  "#0c4a6e",
  "Backend":                   "#052e16",
  "Bases de données & Design": "#500724",
  "Outils / DevOps":           "#451a03",
}

const categoryGradientLight: Record<string, string> = {
  "Langages":                  "linear-gradient(160deg, #ede9fe 0%, #ddd6fe 60%, #c4b5fd 100%)",
  "Frontend":                  "linear-gradient(160deg, #e0f2fe 0%, #bae6fd 60%, #a5f3fc 100%)",
  "Backend":                   "linear-gradient(160deg, #dcfce7 0%, #bbf7d0 60%, #a7f3d0 100%)",
  "Bases de données & Design": "linear-gradient(160deg, #fce7f3 0%, #fbcfe8 60%, #f9a8d4 100%)",
  "Outils / DevOps":           "linear-gradient(160deg, #fef9c3 0%, #fde68a 60%, #fcd34d 100%)",
}

const categoryGradientDark: Record<string, string> = {
  "Langages":                  "linear-gradient(160deg, #2e1065 0%, #4c1d95 60%, #3730a3 100%)",
  "Frontend":                  "linear-gradient(160deg, #0c4a6e 0%, #075985 60%, #164e63 100%)",
  "Backend":                   "linear-gradient(160deg, #052e16 0%, #064e3b 60%, #065f46 100%)",
  "Bases de données & Design": "linear-gradient(160deg, #500724 0%, #831843 60%, #701a75 100%)",
  "Outils / DevOps":           "linear-gradient(160deg, #451a03 0%, #78350f 60%, #92400e 100%)",
}

// Phrases poétiques / accrocheurs — style maquette
const categoryDescription: Record<string, string> = {
  "Langages":
    "La matière première de tout ce que je construis.",
  "Frontend":
    "L'art de transformer le design en interfaces fluides et réactives.",
  "Backend":
    "La logique invisible qui fait tourner chaque application.",
  "Bases de données & Design":
    "Structurer la donnée, sublimer l'expérience utilisateur.",
  "Outils / DevOps":
    "Les outils qui accélèrent, automatisent et fiabilisent.",
}

// ─── composant principal ──────────────────────────────────────────────────────

export function SkillCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [focusedIndex, setFocusedIndex] = useState(0)
  const [dims, setDims] = useState({ cardW: 320, cardH: 400, radius: 320 })
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const update = () => {
      const m = window.innerWidth < 768
      setDims(
        m
          ? { cardW: 200, cardH: 280, radius: 200 }
          : { cardW: 320, cardH: 400, radius: 320 }
      )
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"))
    check()
    const obs = new MutationObserver(check)
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => obs.disconnect()
  }, [])

  const N = skillCategories.length
  const step = 360 / N
  const headerH = 80

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const rawProgress = useTransform(scrollYProgress, [0, 1], [0, N - 1])

  useMotionValueEvent(rawProgress, "change", (latest) => {
    setFocusedIndex(Math.min(Math.round(latest), N - 1))
  })

  return (
    <section ref={containerRef} className="relative" style={{ height: "1000vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-background flex flex-col">
        <div className="flex-1 relative">
          <CircleCenter dims={dims} headerH={headerH}>
            {skillCategories.map((cat, i) => {
              const relIdx = ((i - focusedIndex + N) % N)
              const angle = relIdx * step
              const rad = (angle * Math.PI) / 180
              const cx = Math.sin(rad) * dims.radius
              const cy = -Math.cos(rad) * dims.radius

              const isActive = relIdx === 0
              const absDist = Math.min(relIdx, N - relIdx)
              const blur = absDist * 5
              const grayscale = Math.min(absDist / 1.5, 1)
              const opacity = isActive ? 1 : Math.max(0.08, 1 - absDist * 0.3)
              const sc = isActive ? 1 : Math.max(0.3, 1 - absDist * 0.2)

              const accent = categoryAccent[cat.title] ?? "#6d28d9"
              const pillText = categoryPillText[cat.title] ?? "#4c1d95"
              const gradient = isDark
                ? (categoryGradientDark[cat.title] ?? categoryGradientDark["Langages"])
                : (categoryGradientLight[cat.title] ?? categoryGradientLight["Langages"])

              return (
                <motion.div
                  key={cat.title}
                  className="absolute top-0 left-0 rounded-2xl overflow-hidden"
                  style={{
                    width: dims.cardW,
                    height: dims.cardH,
                    background: gradient,
                    boxShadow: isActive
                      ? `0 0 70px 12px ${accent}35, 0 8px 40px -8px ${accent}45`
                      : "0 4px 24px -4px rgba(0,0,0,0.10)",
                  }}
                  animate={{
                    x: cx - dims.cardW / 2,
                    y: cy - dims.cardH / 2,
                    filter: `blur(${blur}px) grayscale(${grayscale})`,
                    opacity,
                    scale: sc,
                  }}
                  transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {/* Contenu de la card */}
                  <div className="flex flex-col h-full px-5 pt-5 pb-5 gap-3">

                    {/* ── Badge ● TITRE ── */}
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: accent }}
                      />
                      <span
                        className="text-[10px] md:text-[11px] font-bold tracking-[0.12em] uppercase"
                        style={{ color: accent }}
                      >
                        {cat.title}
                      </span>
                    </div>

                    {/* ── Grand titre serif italic ── */}
                    <p
                      className="font-serif italic font-bold text-lg md:text-2xl leading-tight flex-1"
                      style={{
                        color: isDark
                          ? "rgba(255,255,255,0.92)"
                          : "hsl(224 71.4% 8%)",
                      }}
                    >
                      {categoryDescription[cat.title]}
                    </p>

                    {/* ── Liste des tech : logo + nom en ligne ── */}
                    <div className="flex flex-col gap-1.5">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2"
                        >
                          {/* Logo */}
                          <div className="w-4 h-4 relative flex-shrink-0">
                            <Image
                              src={skill.logo}
                              alt={skill.name}
                              fill
                              className="object-contain"
                              sizes="16px"
                            />
                          </div>
                          {/* Nom */}
                          <span
                            className="font-mono text-[10px] md:text-[11px] font-medium"
                            style={{
                              color: isDark
                                ? "rgba(255,255,255,0.75)"
                                : pillText,
                            }}
                          >
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </CircleCenter>
        </div>

        {/* ── Indicateurs de pagination ── */}
        <div className="flex items-center justify-center pb-6 pointer-events-none">
          {skillCategories.map((cat, i) => {
            const accent = categoryAccent[cat.title] ?? "#6d28d9"
            return (
              <div
                key={i}
                className="h-2 rounded-full transition-all duration-300 mx-1"
                style={{
                  width: i === focusedIndex ? 24 : 8,
                  background:
                    i === focusedIndex
                      ? accent
                      : isDark
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(0,0,0,0.15)",
                }}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Centrage du cercle ───────────────────────────────────────────────────────

function CircleCenter({
  dims,
  headerH,
  children,
}: {
  dims: { cardW: number; cardH: number; radius: number }
  headerH: number
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const el = ref.current?.parentElement
    if (!el) return
    const update = () => {
      const rect = el.getBoundingClientRect()
      const flexCenter = rect.top + rect.height / 2
      const targetActiveTop = headerH + 20
      const circleCenterNeeded =
        targetActiveTop + dims.cardH / 2 + dims.radius
      setOffsetY(Math.max(0, circleCenterNeeded - flexCenter))
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener("resize", update)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", update)
    }
  }, [dims, headerH])

  return (
    <div
      ref={ref}
      className="absolute left-1/2"
      style={{
        top: `calc(50% + ${offsetY}px)`,
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </div>
  )
}
