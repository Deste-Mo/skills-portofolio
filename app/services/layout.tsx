"use client"

import { useLayoutEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const firstRender = useRef(true)

  useLayoutEffect(() => {
    const html = document.documentElement
    const body = document.body
    const savedBehavior = html.style.scrollBehavior

    html.style.scrollBehavior = "auto"

    const forceScrollToTop = () => {
      html.scrollTop = 0
      body.scrollTop = 0
      window.scrollTo(0, 0)
    }

    forceScrollToTop()

    if (firstRender.current) {
      firstRender.current = false
      let attempts = 0
      const retry = () => {
        if (window.scrollY > 0 && attempts < 10) {
          attempts++
          forceScrollToTop()
          requestAnimationFrame(retry)
        }
      }
      requestAnimationFrame(retry)
    }

    html.style.scrollBehavior = savedBehavior
  }, [pathname])

  return <>{children}</>
}
