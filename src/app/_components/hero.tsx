"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center px-6 md:px-8 lg:px-12"
    >
      <div className="absolute top-36 right-6 text-xs font-light tracking-widest text-white/60 md:right-12">
        ART OF THE
        <br />
        GOLDEN AGE
      </div>

      <div className="mb-12 md:mb-16">
        <h1 className="text-bone font-serif text-6xl leading-none font-light tracking-tight md:text-8xl lg:text-9xl">
          \THE BROWNADE
        </h1>
      </div>

      <div className="mb-12 max-w-4xl text-center md:mb-16">
        <p className="text-lg leading-relaxed font-light tracking-wide text-white/90 md:text-xl lg:text-2xl">
          THE <em className="italic">BROWNADE</em> AIM IS TO CARE FOR{" "}
          <em className="italic">THE COLLECTION</em>,
          <br />
          TO ENHANCE IT FOR <em className="italic">FUTURE</em> GENERATIONS, AND
          TO MAKE IT ACCESSIBLE TO ALL.
        </p>
      </div>

      <div className="mb-8">
        <Button
          variant="outline"
          size="lg"
          className="!rounded-full bg-transparent text-sm font-light tracking-wider"
        >
          App →
        </Button>
      </div>
    </motion.div>
  )
}
