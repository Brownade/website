import { CarouselDemo } from "@/app/_components/carousels"
import ContainerDemo from "@/components/layout/container"

import { CardClickDemo } from "@/app/_components/cards"
import { ButtonArrowIconDemo } from "@/components/framer-motion/button"
import { dataListCardDemo } from "@/constants/data"
import { paths } from "@/constants/paths"
import { dataListCarouselDemo } from "@/lib/mock-data"
import Link from "next/link"

export default function Page() {
  return (
    <ContainerDemo>
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-5">
        <div className="">
          <span>App</span>
        </div>

        <div className="lg:col-span-4 lg:space-y-8">
          <CarouselDemo listCarouselDemo={dataListCarouselDemo} />
          <div className="grid grid-cols-1 items-start gap-2 pt-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link href={paths.services}>
                <ButtonArrowIconDemo text="Services" clickable />
              </Link>
            </div>

            <div className="text-sm sm:text-lg lg:col-span-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              esse iure? Aperiam, molestias illum! Odit veniam pariatur ea,
              architecto dolor iure, dicta impedit, blanditiis quae animi
              corrupti numquam doloremque hic.
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-1 pt-12 sm:pt-6 lg:grid-cols-2">
            {dataListCardDemo.service.map((item, idx) => (
              <CardClickDemo
                key={idx}
                avatarUrl={item.avatarUrl}
                avatarFallback={item.avatarFallback}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </ContainerDemo>
  )
}
