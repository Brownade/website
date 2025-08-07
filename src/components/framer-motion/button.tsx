"use client"

import { iconVariants } from "@/constants/variants"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface ButtonArrowIconProps {
  text?: string
  clickable: boolean
  onClick?: () => void
}

export function ButtonArrowIconDemo(props: ButtonArrowIconProps) {
  const iconVariant = {
    initial: iconVariants.initial,
    hover: props.clickable ? iconVariants.hover : {}
  }

  return (
    <motion.div
      className={cn(
        "group inline-flex items-baseline gap-3 rounded-full font-medium transition-all duration-300",
        props.clickable && "cursor-pointer"
      )}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={props.clickable ? props.onClick : undefined}
    >
      {props.text && (
        <span
          className={cn(
            "text-4xl transition-colors duration-300 group-hover:text-black/60 dark:group-hover:text-white/60"
          )}
        >
          {props.text}
        </span>
      )}

      <motion.div
        className={cn(
          "flex size-8 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-black/60 group-hover:text-white/80 dark:bg-white dark:text-black dark:group-hover:bg-white/60 dark:group-hover:text-black/80"
        )}
        variants={iconVariant}
      >
        <ArrowUpRight className={cn("size-4")} />
      </motion.div>
    </motion.div>
  )
}
