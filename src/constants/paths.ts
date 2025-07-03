import { siteConfig } from "@/config/site"

export const paths = {
  home: siteConfig.href,
  news: "news",
  blog: "/blog",
  faq: "/faq",

  maintenance: "/maintenance"
} as const
