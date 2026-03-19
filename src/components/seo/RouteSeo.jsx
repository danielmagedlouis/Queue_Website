import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getAbsoluteUrl } from "../../lib/routes";

const GA_MEASUREMENT_ID = "G-19YFREF1C7";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function buildSeoByPageId(content) {
  const siteName = content.siteDetails.name;
  const defaultDescription = content.siteDetails.description;

  return {
    home: {
      title: `${siteName} | Web Development & AI Solutions`,
      description: defaultDescription,
      canonicalPath: "/",
    },
    services: {
      title: `Services | ${siteName}`,
      description: content.services.hero.description ?? defaultDescription,
      canonicalPath: "/services",
    },
    portfolio: {
      title: `Portfolio | ${siteName}`,
      description: content.portfolio.hero.description ?? defaultDescription,
      canonicalPath: "/portfolio",
    },
    process: {
      title: `Our Process | ${siteName}`,
      description: content.process.hero.description ?? defaultDescription,
      canonicalPath: "/process",
    },
    contact: {
      title: `Contact Us | ${siteName}`,
      description: content.contact.hero.description ?? defaultDescription,
      canonicalPath: "/contact",
    },
  };
}

export default function RouteSeo({ content, pageId }) {
  const location = useLocation();
  const trackedInitialView = useRef(false);
  const seoByPageId = useMemo(() => buildSeoByPageId(content), [content]);
  const seo = seoByPageId[pageId] ?? seoByPageId.home;
  const canonicalUrl = getAbsoluteUrl(seo.canonicalPath);
  const pageLocation = getAbsoluteUrl(`${location.pathname}${location.search}${location.hash}`);

  useEffect(() => {
    document.title = seo.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: seo.description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: seo.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: seo.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: content.siteDetails.name,
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: seo.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: seo.description,
    });
    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });
  }, [canonicalUrl, content.siteDetails.name, seo.description, seo.title]);

  useEffect(() => {
    if (!trackedInitialView.current) {
      trackedInitialView.current = true;
      return;
    }

    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_location: pageLocation,
      page_path: `${location.pathname}${location.search}`,
      page_title: seo.title,
    });
  }, [location.hash, location.pathname, location.search, pageLocation, seo.title]);

  return null;
}
