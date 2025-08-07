import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface CardDemoProps {
  hoverable?: boolean
  className?: string
  children?: ReactNode
}

export function CardDemo(props: CardDemoProps) {
  return (
    <Card
      className={cn(
        "border-0",
        props.hoverable && "hover:cursor-pointer hover:bg-white/10",
        props.className
      )}
    >
      {props.children}
    </Card>
  )
}
