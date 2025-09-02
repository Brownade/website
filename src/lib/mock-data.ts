const demoImageUrl =
  "https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/476509205_555409170843779_2189911961991409505_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=d8x825cldBUQ7kNvwGsLwp_&_nc_oc=AdmQipb-lUB36L-0lq5uLz9gGrleSCyAHyFjv2-2L25cISxz9ki7JukZbSuOSr9d0yA&_nc_zt=23&_nc_ht=scontent.fbkk6-2.fna&_nc_gid=WGYMzZHY8Eu73OLBoiHLzg&oh=00_AfW4GSzUgGdHS5q6rS259KzBE0lqATeEPe8uzj3385Mtww&oe=689AB1DD"
const demoAvatarUrl =
  "https://avatars.githubusercontent.com/u/187200145?s=400&u=dbff7df0bc275ca8eeb109d55dc8266632679ce3&v=4"
const demoAvatarFallback = "BN"
const demoTitle = "Lorem Ipsum"
const demoDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
const demoButtonText = "Lorem Ipsum"
const demoImageAlt = "Lorem Ipsum"

export const dataAvatarDemo = {
  src: demoAvatarUrl,
  fallback: demoAvatarFallback
}

export const dataListCarouselDemo = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  title: demoTitle,
  description: demoDescription,
  buttonText: demoButtonText,
  imageUrl: demoImageUrl,
  imageAlt: demoImageAlt,
  avatarUrl: demoAvatarUrl,
  avatarFallback: demoAvatarFallback
}))
