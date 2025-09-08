"use client"

import { Tabs } from "@/components/ui/tabs"
import { ComponentProps } from "react"

export function CodeTabs({ children }: ComponentProps<typeof Tabs>) {
  return <Tabs className="relative mt-6 w-full">{children}</Tabs>
}
