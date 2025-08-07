"use client"

import { CircleUser } from "lucide-react"
import Link from "next/link"
import { ComponentPropsWithoutRef } from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { listPathsInNavigation, paths } from "@/constants/paths"

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href={paths.home}
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Brownade
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Step into Brownade&apos;s realm, digital experience.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="" title="Introduction">
                Explore the Brownade documentation to get started with our
                components and utilities.
              </ListItem>
              <ListItem href="" title="Get the App">
                Learn how to install and set up the Brownade app on your device.
              </ListItem>
              <ListItem href="" title="Our Mission">
                Discover our mission to create a better digital experience for
                everyone.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shops</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {listPathsInNavigation.map((path) => (
                <ListItem key={path.title} title={path.title} href={path.href}>
                  {path.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={paths.news}>News</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="">
                    <div className="font-medium">Lorem ipsum</div>
                    <div className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="">
                    <div className="font-medium">Dolor Sit Amet</div>
                    <div className="text-muted-foreground">
                      Consectetur adipiscing elit.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="">
                    <div className="font-medium">Consectetur Adipiscing</div>
                    <div className="text-muted-foreground">
                      Ut enim ad minim veniam.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Life @Brownade</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Jobs opening</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href={paths.contact}
                    className="flex-row items-center gap-2"
                  >
                    <CircleUser className="h-4 w-4" />
                    Contact us
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
