"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { navConfig } from "@/config/nav"
import { siteConfig } from "@/config/site"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-4 py-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-full border border-primary/20 p-[3px]">
          <div className="flex gap-1">
            <Link href={siteConfig.path}>
              <Button
                variant="ghost"
                className="rounded-full bg-primary/10 px-28"
              >
                {siteConfig.name}
              </Button>
            </Link>
            <div className="hidden gap-[2px] lg:flex">
              {Object.entries(navConfig).map(([key, { title, path }]) => (
                <Link key={key} href={path}>
                  <Button variant="ghost" className="rounded-full">
                    {title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact" className="hidden md:block">
            <Button variant="ghost" className="rounded-full">
              Contact now
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 overflow-hidden rounded-3xl border border-primary/20 bg-background md:hidden"
          >
            {Object.entries(navConfig).map(([key, { title, path }]) => (
              <Link key={key} href={path} onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-none"
                >
                  {title}
                </Button>
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-start rounded-none"
              >
                Contact now
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
