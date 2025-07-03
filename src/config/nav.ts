import { paths } from "@/constants/paths"
import { DocumentNavItem, HeaderNavItem } from "@/types/nav"
import { Book, CircleQuestionMark, Home, Newspaper } from "lucide-react"

interface NavConfig {
  header: HeaderNavItem[]
  documents: DocumentNavItem[]
}

export const navConfig: NavConfig = {
  header: [
    {
      title: "Home",
      href: "/",
      icon: Home
    },
    {
      title: "News",
      href: paths.news,
      icon: Newspaper
    },
    {
      title: "Blog",
      href: paths.blog,
      icon: Book
    },
    {
      title: "FAQ",
      href: paths.faq,
      icon: CircleQuestionMark
    }
  ],
  documents: []
}
