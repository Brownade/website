import { CardDemo } from "@/components/card"
import { ButtonArrowIconDemo } from "@/components/framer-motion/button"
import {
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export function CardAdvertDemo({ className }: ComponentProps<"div">) {
  return (
    <CardDemo
      className={cn(
        "group text-surface-foreground relative text-sm",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="text-base leading-tight font-semibold text-balance group-hover:underline">
          Lorem ipsum
        </CardTitle>
        <CardAction>
          <ButtonArrowIconDemo clickable />
        </CardAction>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        </CardDescription>
      </CardContent>
    </CardDemo>
  )
}
