import { paths } from "@/constants/paths"
import { DocumentNavItem, HeaderNavItem } from "@/types/nav"
import { Home } from "lucide-react"

interface NavConfig {
  header: HeaderNavItem[]
  documents: DocumentNavItem[]
}

export const navConfig: NavConfig = {
  header: [
    {
      title: "Home",
      href: paths.home,
      icon: Home
    },
    {
      title: "Shops",
      href: paths.shops,
      icon: Home
    },
    {
      title: "News",
      href: paths.news,
      icon: Home
    },
    {
      title: "Services",
      href: paths.services,
      icon: Home
    },
    {
      title: "Careers",
      href: paths.careers,
      icon: Home
    },
    {
      title: "Contact",
      href: paths.contact,
      icon: Home
    }
  ],
  documents: []
}
