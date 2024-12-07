import Container from "@/components/layout/container"

import ArtworkCard from "./_components/artwork-card"

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
        <ArtworkCard
          option={1}
          color="bg-bone"
          className="relative sm:col-span-2 lg:col-span-1 lg:row-span-2"
          tag="LOREM IPSUM"
          title="Dolor Sit Amet"
          subtitle="Consectetur"
          metadata="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
        />
        <ArtworkCard
          option={2}
          color="bg-paleOyster"
          className="sm:col-span-2 lg:col-span-2 lg:row-span-1"
          tag="LOREM IPSUM"
          title="Dolor Sit Amet"
          subtitle="Consectetur"
          metadata="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
        />
        <ArtworkCard
          option={3}
          color="bg-tobaccoBrown"
          tag="LOREM IPSUM"
          title="Dolor Sit Amet"
          metadata="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
        />
        <ArtworkCard
          option={4}
          color="bg-vanilla"
          tag="LOREM IPSUM"
          title="lorem ipsum"
          subtitle="dolor sit amet"
          metadata="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
        />
      </div>
    </Container>
  )
}
