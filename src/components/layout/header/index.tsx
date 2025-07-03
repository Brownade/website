"use client"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { navConfig } from "@/config/nav"
import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"
import { Search, Settings } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const linkStyles =
  "rounded-full border border-bone p-[13px] px-10 text-bone font-medium text-sm transition-colors hover:bg-bone hover:text-heavy-metal"

const commandItems = [
  {
    group: "Navigation",
    items: navConfig.header.map((item) => ({
      title: item.title,
      href: item.href,
      icon: item.icon
    }))
  },
  {
    group: "Actions",
    items: [{ title: "Settings", href: "/settings", icon: Settings }]
  }
]

export default function Header() {
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        if (!isMobile) {
          setIsCommandOpen((open) => !open)
        }
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [isMobile])

  const handleMenuClick = () => {
    if (isMobile) {
      setIsSheetOpen(true)
    } else {
      setIsCommandOpen(true)
    }
  }

  const runCommand = (callback: () => void) => {
    setIsCommandOpen(false)
    setIsSheetOpen(false)
    callback()
  }

  return (
    <>
      <motion.header className="p-[10px] lg:p-[20px]">
        <div className="mx-auto sm:max-w-fit">
          <div className="flex items-center justify-between gap-[2px] rounded-full p-[3px]">
            <div className="flex w-full gap-1">
              <Link
                href={siteConfig.href}
                className={`${linkStyles} border-heavy-metal bg-zeus w-full text-center lg:max-w-sm`}
              >
                {siteConfig.name}
              </Link>
            </div>

            <div className="hidden md:block">
              <Button
                variant="outline"
                size="lg"
                onClick={handleMenuClick}
                className={`${linkStyles} !border-bone flex items-center gap-2 !p-4`}
                aria-label="Open command palette"
              >
                <Search className="size-4" />
              </Button>
            </div>

            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <button className={linkStyles} aria-label="Toggle menu">
                    Menu
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full">
                  <SheetHeader>
                    <SheetTitle>The {siteConfig.name}</SheetTitle>
                    <SheetDescription>ART OF THE GOLDEN AGE.</SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    {commandItems.map((group) => (
                      <div key={group.group}>
                        <h3 className="text-muted-foreground mb-2 px-4 text-sm font-semibold">
                          {group.group}
                        </h3>
                        <div className="space-y-1 px-4">
                          {group.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setIsSheetOpen(false)}
                              className="hover:bg-accent hover:text-accent-foreground flex items-center gap-3 rounded-lg p-3 text-sm transition-colors"
                            >
                              <item.icon className="h-4 w-4" />
                              <span>{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>

      <CommandDialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {commandItems.map((group) => (
            <CommandGroup key={group.group} heading={group.group}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.title}
                  onSelect={() => {
                    runCommand(() => {
                      window.location.href = item.href
                    })
                  }}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
