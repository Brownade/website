import { dataAvatarDemo } from "@/lib/mock-data"

export const dataListCardDemo = {
  service: [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatarUrl: dataAvatarDemo.src,
      avatarFallback: dataAvatarDemo.fallback
    },
    {
      title: "Dolor Sit Amet",
      description:
        "Consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      avatarUrl: dataAvatarDemo.src,
      avatarFallback: dataAvatarDemo.fallback
    },
    {
      title: "Consectetur Adipiscing",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      avatarUrl: dataAvatarDemo.src,
      avatarFallback: dataAvatarDemo.fallback
    }
  ]
}

export const dataMapDemo = {
  imageUrl: "/mocks/map.jpg",
  imageAlt: "Map location"
}
