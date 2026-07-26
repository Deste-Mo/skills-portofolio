"use client"

import { useState, useCallback } from "react"

interface FormData {
  name: string
  email: string
  message: string
}

interface UseContactFormReturn {
  formData: FormData
  status: "idle" | "sending" | "success" | "error"
  errorMessage: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    },
    [],
  )

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Erreur lors de l'envoi")
      }

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Une erreur est survenue")
    }
  }, [formData])

  const resetForm = useCallback(() => {
    setStatus("idle")
    setErrorMessage("")
    setFormData({ name: "", email: "", message: "" })
  }, [])

  return { formData, status, errorMessage, handleChange, handleSubmit, resetForm }
}
