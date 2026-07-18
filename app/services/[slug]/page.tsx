import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServicePlaceholder } from "../../../components/services/ServicePlaceholder";
import { ServicePage as ServicePageLayout } from "../../../components/services/ServicePage";
import { getServiceBySlug, services } from "../../../lib/content/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((route) => ({
    slug: route.slug
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getServiceBySlug(slug);

  if (!route) return {};

  if (route.content) {
    return {
      title: route.content.seoTitle,
      description: route.content.metaDescription,
      alternates: { canonical: `/services/${route.slug}` },
      openGraph: {
        title: route.content.seoTitle,
        description: route.content.metaDescription,
        url: `/services/${route.slug}`,
        type: "website",
        images: [{ url: route.content.heroImage, alt: route.content.heroImageAlt }]
      }
    };
  }

  return {
    title: `${route.shortTitle} | ASAP Auto Electrics`,
    robots: {
      index: false,
      follow: false
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const route = getServiceBySlug(slug);

  if (!route) {
    notFound();
  }

  if (route.content) return <ServicePageLayout service={route.content} />;

  return <ServicePlaceholder title={route.shortTitle} />;
}
