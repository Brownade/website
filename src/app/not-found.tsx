"use client"

import { ButtonArrowIconDemo } from "@/components/framer-motion/button"
import ContainerDemo from "@/components/layout/container"
import { paths } from "@/constants/paths"
import Link from "next/link"

export default function NotFound() {
  return (
    <ContainerDemo>
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-5">
        <div className="">
          <span></span>
        </div>

        <div className="lg:col-span-4 lg:space-y-8">
          <div className="text-muted-foreground text-xl">
            The page you looking for
            <Link href={paths.home}>
              <span className="text-black dark:text-white">
                {" "}
                doesn't exist.{" "}
              </span>{" "}
              <span className="mr-2">
                <ButtonArrowIconDemo text="" clickable />
              </span>
            </Link>
            <span>
              Either the internet has broken or we couldn't find the file that
              you were looking for.
            </span>
          </div>
        </div>
      </div>
    </ContainerDemo>
  )
}
