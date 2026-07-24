import { services, getServiceBySlug } from "@/config/services"
import { notFound } from "next/navigation"
import { ServiceContent } from "./ServiceContent"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return <ServiceContent slug={slug} />
}
