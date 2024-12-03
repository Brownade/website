import { DocumentNavItem, HeaderNavItem } from "@/types/nav"

interface NavConfig {
  header: HeaderNavItem[]
  documents: DocumentNavItem[]
}

export const navConfig: NavConfig = {
  header: [
    {
      title: "Collections",
      href: "/collections"
    },
    {
      title: "Events",
      href: "/events"
    },
    {
      title: "Our mission",
      href: "/our-mission"
    }
  ],
  documents: [
    {
      title: "Getting started",
      items: [
        {
          title: "Installation",
          href: "/docs/getting-started/installation",
          items: []
        },
        {
          title: "Configuration",
          href: "/docs/getting-started/configuration",
          items: []
        }
      ]
    }
  ]
}
