import { siteConfig } from "@/config/site"

export const dataAvatarDemo = {
  src: siteConfig.links.image,
  fallback: "BN"
}

export const dataListCarouselDemo = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Lorem Ipsum",
    imageUrl: "/mocks/donut.jpg",
    imageAlt: "Lorem Ipsum",
    avatarUrl: dataAvatarDemo.src,
    avatarFallback: dataAvatarDemo.fallback
  },
  {
    id: 2,
    title: "Dolor Sit Amet",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Dolor Sit Amet",
    imageUrl: "/mocks/gelato.jpg",
    imageAlt: "Dolor Sit Amet",
    avatarUrl: dataAvatarDemo.src,
    avatarFallback: dataAvatarDemo.fallback
  },
  {
    id: 3,
    title: "Consectetur Adipiscing",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonText: "Consectetur Adipiscing",
    imageUrl: "/mocks/cookies.jpg",
    imageAlt: "Consectetur Adipiscing",
    avatarUrl: dataAvatarDemo.src,
    avatarFallback: dataAvatarDemo.fallback
  }
]

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
