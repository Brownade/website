import { ModeSwitcherDemo } from "@/components/mode-switcher"
import { navConfig } from "@/config/nav"

import { siteConfig } from "@/config/site"
import { paths } from "@/constants/paths"
import Link from "next/link"

import { CommandMenuDemo } from "@/components/layout/header/command-menu"
import { MobileNavigationMenuDemo } from "@/components/layout/header/mobile-navigation-menu"
import { NavigationMenuDemo } from "@/components/layout/header/navigation-menu"
import { Panda } from "lucide-react"

export default function HeaderDemo() {
  return (
    <div className="bg-background sticky top-0 z-50 grid grid-cols-2 items-center gap-4 rounded-b-lg px-4 py-2 backdrop-blur lg:grid-cols-5">
      <Link
        href={paths.home}
        className="hidden font-bold hover:cursor-pointer lg:block"
      >
        <Panda className="mr-2 inline-block size-4" />
        {siteConfig.name}
      </Link>
      <MobileNavigationMenuDemo
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
          navItems={navConfig.header.map((item) => ({
            href: item.href,
            label: item.title,
            icon: item.icon
          }))}
        />
        <ModeSwitcherDemo />
      </div>
    </div>
  )
}
