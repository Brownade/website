"use client"

import ArtworkCard from "@/app/_components/artwork-card"
import { Icons } from "@/components/icons"
import Container from "@/components/layout/container"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"
import { isValidEmail } from "@/lib/email-regex"
import {
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Linkedin,
  Mail,
  Send
} from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleNotifyMe = async () => {
    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      })

      if (!response.ok) {
        throw new Error("Failed to send notification")
      }

      const result = await response.json()

      if (result.success) {
        setIsSubscribed(true)
        setShowSuccess(true)
        setEmail("")

        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      } else {
        throw new Error(result.message || "Failed to subscribe")
      }
    } catch (error) {
      console.error("Subscription failed:", error)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleNotifyMe()
  }

  const handleFollowUpdates = () => {
    window.open(`${siteConfig.ceo.x}`, "_blank", "noopener,noreferrer")
  }

  const handleContactEmail = (type: "general" | "business" = "general") => {
    const emails = {
      general: siteConfig.ceo.email,
      business: "info@brownade.com"
    }
    window.location.href = `mailto:${emails[type]}?subject=Brownade Inquiry`
  }

  return (
    <div className="bg-heavy-metal text-bone relative overflow-hidden">
      <Header />
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
            color="bg-pale-oyster"
            className="sm:col-span-2 lg:col-span-2 lg:row-span-1"
            tag="LOREM IPSUM"
            title="Dolor Sit Amet"
            subtitle="Consectetur"
            metadata="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
          />
          <ArtworkCard
            option={3}
            color="bg-tobacco-brown"
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
      <Footer />

      <div className="pointer-events-none fixed inset-0 z-40">
        <div className="bg-bone/30 absolute top-1/4 left-1/4 h-2 w-2 animate-pulse rounded-full"></div>
        <div
          className="bg-vanilla/40 absolute top-3/4 right-1/4 h-1 w-1 animate-ping rounded-full"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="bg-pale-oyster/30 absolute top-1/2 left-1/6 h-1.5 w-1.5 animate-pulse rounded-full"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="bg-tobacco-brown/40 absolute bottom-1/4 left-3/4 h-2 w-2 animate-ping rounded-full"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="bg-bone/20 absolute top-1/6 right-1/3 h-1 w-1 animate-pulse rounded-full"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="bg-heavy-metal/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg">
        <div className="from-heavy-metal/90 via-tobacco-brown/20 to-heavy-metal/90 absolute inset-0 bg-gradient-to-br opacity-60"></div>

        <div className="text-bone relative z-10 max-w-4xl px-6 text-center">
          {showSuccess && (
            <div className="mb-6">
              <Alert className="mx-auto max-w-md border-green-700 bg-green-900/50 text-green-100">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription className="flex items-center gap-2">
                  <span>
                    🎉 Welcome to Brownade! We&apos;ll keep you updated.
                  </span>
                </AlertDescription>
              </Alert>
            </div>
          )}

          {error && (
            <div className="mb-6">
              <Alert className="mx-auto max-w-md border-red-700 bg-red-900/50 text-red-100">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          )}

          <div className="relative mb-8">
            <h1 className="from-bone via-vanilla to-pale-oyster mb-2 animate-pulse bg-gradient-to-r bg-clip-text font-serif text-5xl font-bold text-transparent">
              Brownade.com
            </h1>
            <div className="text-bone/20 absolute inset-0 font-serif text-5xl font-bold blur-sm">
              Brownade.com
            </div>
          </div>

          <div className="mb-12 space-y-4">
            <p className="text-lg font-light tracking-wide opacity-90">
              Something{" "}
              <span className="text-vanilla font-medium">extraordinary</span> is
              brewing
            </p>
            <p className="mx-auto max-w-md text-lg leading-relaxed opacity-70">
              We&apos;re crafting a unique digital experience that will redefine
              creativity and innovation. Stay tuned for the unveiling.
            </p>
          </div>

          <div className="mx-auto mb-8 max-w-md">
            <div className="bg-heavy-metal/50 border-bone/20 h-2 overflow-hidden rounded-full border">
              <div
                className="from-vanilla to-pale-oyster h-full animate-pulse rounded-full bg-gradient-to-r"
                style={{ width: "76%" }}
              ></div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <Badge
                variant="secondary"
                className="bg-tobacco-brown/30 text-bone"
              >
                76% Complete
              </Badge>
              <span className="text-xs opacity-60">Expected: Q3 2025</span>
            </div>
          </div>

          <div className="space-y-6">
            {!isSubscribed ? (
              <form
                onSubmit={handleFormSubmit}
                className="mx-auto max-w-md space-y-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError("")
                    }}
                    className="bg-heavy-metal/50 border-bone/20 text-bone placeholder:text-bone/50 focus:border-vanilla focus:ring-vanilla/20 flex-1"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={!email || isSubmitting}
                    className="bg-bone text-heavy-metal hover:bg-vanilla hover:text-tobacco-brown px-8 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="border-heavy-metal/30 border-t-heavy-metal h-4 w-4 animate-spin rounded-full border-2"></div>
                        Subscribing...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Notify Me
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <Alert className="bg-vanilla/20 border-vanilla/30 text-bone mx-auto max-w-md">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Thanks! You&apos;re now on our exclusive early access list.
                  </AlertDescription>
                </Alert>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Button
                variant="ghost"
                onClick={handleFollowUpdates}
                className="text-bone/60 hover:text-vanilla hover:bg-vanilla/10 transition-all duration-200"
              >
                <Icons.X className="mr-2 h-4 w-4" />
                Follow Updates
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-bone/60 hover:text-vanilla hover:bg-vanilla/10 transition-all duration-200"
                  >
                    Contact
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-heavy-metal border-bone/20 text-bone">
                  <DialogHeader>
                    <DialogTitle className="text-bone font-serif text-2xl">
                      Get in Touch
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Button
                      variant="ghost"
                      onClick={() => handleContactEmail("general")}
                      className="text-bone/80 hover:text-bone hover:bg-vanilla/10 w-full justify-start"
                    >
                      <Mail className="mr-3 h-4 w-4" />
                      {siteConfig.ceo.email}
                    </Button>

                    <Button
                      variant="ghost"
                      onClick={handleFollowUpdates}
                      className="text-bone/80 hover:text-bone hover:bg-vanilla/10 w-full justify-start"
                    >
                      <Icons.X className="mr-3 h-4 w-4" />@
                      {siteConfig.ceo.username}
                      <ExternalLink className="ml-auto h-3 w-3" />
                    </Button>

                    <Button
                      variant="ghost"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/nopnapatn/",
                          "_blank"
                        )
                      }
                      className="text-bone/80 hover:text-bone hover:bg-vanilla/10 w-full justify-start"
                    >
                      <Linkedin className="mr-3 h-4 w-4" />
                      LinkedIn
                      <ExternalLink className="ml-auto h-3 w-3" />
                    </Button>

                    <Separator className="bg-bone/20" />

                    <div className="pt-2">
                      <p className="text-bone/60 mb-2 text-sm">
                        For business inquiries:
                      </p>
                      <Button
                        variant="ghost"
                        onClick={() => handleContactEmail("business")}
                        className="text-vanilla hover:text-bone hover:bg-vanilla/10 w-full justify-start"
                      >
                        <Mail className="mr-3 h-4 w-4" />
                        info@brownade.com
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div
            className="border-bone/10 absolute -top-10 -left-10 h-20 w-20 animate-spin rounded-full border"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="border-vanilla/10 absolute -right-10 -bottom-10 h-16 w-16 animate-spin rounded-full border"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          />
        </div>
      </div>
    </div>
  )
}
