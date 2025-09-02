import ContainerDemo from "@/components/layout/container"

export default function Page() {
  return (
    <ContainerDemo>
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-5">
        <div className=""></div>

        <div className="lg:col-span-4 lg:space-y-8">
          <div className=""></div>
        </div>
      </div>
    </ContainerDemo>
  )
}
