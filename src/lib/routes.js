export const SITE_ORIGIN = "https://queuesolutions.org";

export const PAGE_ROUTES = [
  { id: "home", path: "/" },
  { id: "services", path: "/services" },
  { id: "portfolio", path: "/portfolio" },
  { id: "process", path: "/process" },
  { id: "contact", path: "/contact" },
];

// Future SEO landing pages can be added here and routed through the same app shell.
export const LANDING_PAGE_ROUTES = [
  { id: "queue-management-system-egypt", path: "/queue-management-system-egypt" },
  { id: "web-development", path: "/web-development" },
  { id: "ai-solutions", path: "/ai-solutions" },
];

const pageIdToPath = new Map(PAGE_ROUTES.map((route) => [route.id, route.path]));
const pathnameToPageId = new Map(PAGE_ROUTES.map((route) => [route.path, route.id]));

export function getPathForPageId(pageId) {
  return pageIdToPath.get(pageId) ?? "/";
}

export function getPageIdForPath(pathname = "/") {
  return pathnameToPageId.get(pathname) ?? "home";
}

export function getAbsoluteUrl(pathname = "/") {
  return new URL(pathname, SITE_ORIGIN).toString();
}

export function getIndexableRoutes() {
  return [...PAGE_ROUTES, ...LANDING_PAGE_ROUTES];
}
