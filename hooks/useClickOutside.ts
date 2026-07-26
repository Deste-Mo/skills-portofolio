"use client"

import { useEffect } from "react"

export function useClickOutside(open: boolean, onClose: () => void) {
  useEffect(() => {
    if (!open) return
    const handler = () => onClose()
    window.addEventListener("click", handler, { once: true })
    return () => window.removeEventListener("click", handler)
  }, [open, onClose])
}
