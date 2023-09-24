import { siteConfig } from "@/config/site"

import "./globals.css"

import type { Metadata } from "next"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Providers } from "@/components/Providers"
import { TailwindIndicator } from "@/components/TailwindIndicator"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            {/* HEADER HERE */}
            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}