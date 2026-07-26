import { NextResponse } from "next/server"
import { sendContactEmail } from "@/services/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      )
    }

    await sendContactEmail({ name, email, message })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err)
    console.error("Contact API error:", errorMsg)

    const message = errorMsg.includes("connect")
      ? "Impossible de se connecter au serveur SMTP. Vérifiez votre connexion réseau."
      : "Erreur lors de l'envoi du message"

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
