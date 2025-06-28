import { siteConfig } from "@/config/site"

export const paths = {
  home: siteConfig.href,
  faq: "/faq",

  maintenance: "/maintenance"
} as const
