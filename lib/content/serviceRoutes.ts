import { getServiceBySlug, getServicePath, services } from "./services";

export type { ServiceRoute } from "./services";

export type FooterServiceLink = {
  title: string;
  slug: string;
};

export const serviceRoutes = services;

export function getServiceRouteBySlug(slug: string) {
  return getServiceBySlug(slug);
}

export function getServiceRouteByHomepageCardTitle(cardTitle: string) {
  return serviceRoutes.find((route) => route.homepageCardTitle === cardTitle);
}

export { getServicePath };

export const footerServiceLinks = [
  {
    title: "Alternator & Starter Repairs",
    slug: "alternator-repairs"
  },
  {
    title: "Anderson Plugs",
    slug: "anderson-plugs"
  },
  {
    title: "Auto Electrical Diagnostics",
    slug: "auto-electrical-diagnostics"
  },
  {
    title: "Battery & Charging",
    slug: "battery-charging-system"
  },
  {
    title: "Brake Controllers",
    slug: "brake-controllers"
  },
  {
    title: "Electric Window Repairs",
    slug: "electric-window-repairs"
  },
  {
    title: "General Auto Electrical Repairs",
    slug: "auto-electrical-diagnostics"
  },
  {
    title: "Lighting Repairs",
    slug: "lighting-repairs"
  },
  {
    title: "Trailer Wiring",
    slug: "trailer-wiring"
  }
] satisfies FooterServiceLink[];
