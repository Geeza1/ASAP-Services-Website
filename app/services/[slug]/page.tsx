import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServicePlaceholder } from "../../../components/services/ServicePlaceholder";
import { getServiceRouteBySlug, serviceRoutes } from "../../../lib/content/serviceRoutes";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceRoutes.map((route) => ({
    slug: route.slug
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getServiceRouteBySlug(slug);

  return {
    title: route ? `${route.title} | ASAP Auto Electrics` : "Service Page | ASAP Auto Electrics",
    robots: {
      index: false,
      follow: false
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const route = getServiceRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  return <ServicePlaceholder title={route.title} />;
}
