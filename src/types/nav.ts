import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export type HeaderNavItem = NavItem
export type DocumentNavItem = NavItemWithChildren
