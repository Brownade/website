import { CommandMenuDemo } from "@/components/layout/header/command-menu"
import { MobileNavigationMenuDemo } from "@/components/layout/header/mobile-navigation-menu"
import { NavigationMenuDemo } from "@/components/layout/header/navigation-menu"
import { ModeSwitcherDemo } from "@/components/mode-switcher"
import { navConfig } from "@/config/nav"
import { siteConfig } from "@/config/site"
import { paths } from "@/constants/paths"
import { source } from "@/lib/source"
import Link from "next/link"

export default function HeaderDemo() {
  const pageTree = source.pageTree

  return (
    <div className="bg-background sticky top-0 z-50 grid grid-cols-2 items-center gap-4 rounded-b-lg px-4 py-2 backdrop-blur lg:grid-cols-5">
      <Link
        href={paths.home}
        className="hidden font-bold hover:cursor-pointer lg:block"
      >
        {siteConfig.name}
      </Link>
      <MobileNavigationMenuDemo
        tree={pageTree}
        items={navConfig.header.map((item) => ({
          href: item.href,
          label: item.title
        }))}
        className="flex lg:hidden"
      />

      <div className="hidden lg:col-span-3 lg:block">
        <NavigationMenuDemo />
      </div>
      <div className="flex items-center justify-end gap-2">
        <CommandMenuDemo
          tree={pageTree}
          navItems={navConfig.header.map((item) => ({
            href: item.href,
            label: item.title
          }))}
        />
        <ModeSwitcherDemo />
      </div>
    </div>
  )
}
