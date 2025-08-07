"use client"

import { CardDemo } from "@/components/card"
import { ButtonArrowIconDemo } from "@/components/framer-motion/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

interface CardClickDemoProps {
  title: string
  description: string
  avatarUrl: string
  avatarFallback: string
}

export function CardClickDemo(props: CardClickDemoProps) {
  return (
    <CardDemo hoverable>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="size-16 rounded-lg">
            <AvatarImage src={props.avatarUrl} className="size-16 rounded-lg" />
            <AvatarFallback className="size-16 rounded-lg">
              {props.avatarFallback}
            </AvatarFallback>
          </Avatar>
          <CardTitle>{props.title}</CardTitle>
        </div>
        <CardAction>
          <ButtonArrowIconDemo clickable />
        </CardAction>
      </CardHeader>
      <CardContent>
        <CardDescription>{props.description}</CardDescription>
      </CardContent>
    </CardDemo>
  )
}
