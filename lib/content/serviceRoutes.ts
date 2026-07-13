export type ServiceRoute = {
  slug: string;
  title: string;
  homepageCardTitle?: string;
};

export const serviceRoutes = [
  {
    slug: "auto-electrical-diagnostics",
    title: "Auto Electrical Diagnostics",
    homepageCardTitle: "Diagnostics & Fault Finding"
  },
  {
    slug: "alternator-repairs",
    title: "Alternator Repairs"
  },
  {
    slug: "starter-motor-repairs",
    title: "Starter Motor Repairs"
  },
  {
    slug: "electric-window-repairs",
    title: "Electric Window Repairs",
    homepageCardTitle: "Electric Windows"
  },
  {
    slug: "brake-controllers",
    title: "Brake Controllers",
    homepageCardTitle: "Accessories & Towing"
  },
  {
    slug: "anderson-plugs",
    title: "Anderson Plugs"
  },
  {
    slug: "lighting-repairs",
    title: "Lighting Repairs"
  },
  {
    slug: "battery-charging-system",
    title: "Battery & Charging System",
    homepageCardTitle: "Starting & Charging"
  },
  {
    slug: "trailer-wiring",
    title: "Trailer Wiring"
  },
  {
    slug: "caravan-auto-electrics",
    title: "Caravan Auto Electrics"
  }
] satisfies ServiceRoute[];

export function getServiceRouteBySlug(slug: string) {
  return serviceRoutes.find((route) => route.slug === slug);
}

export function getServiceRouteByHomepageCardTitle(cardTitle: string) {
  return serviceRoutes.find((route) => route.homepageCardTitle === cardTitle);
}

export function getServicePath(slug: string) {
  return `/services/${slug}`;
}
