// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "invmy";
export const SITE_TITLE = "invmy";
export const SITE_DESCRIPTION = "invest my trade";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "invmy - All Tags";
export const Tags_DESCRIPTION =
  "invmy - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in invmy`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in invmy`,
    description: `Browse all articles under the ${category} category in invmy`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/review/", title: "ReView" },
  { href: "/category/mytrade", title: "MyTrade" },
  { href: "/category/other/", title: "Other" },
  { href: "/tags/", title: "All Tags" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/why-astro/", title: "Astro" },
  { href: "/posts/tailwind-typography/", title: "Tailwind" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/inotelab",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/inotelab",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
