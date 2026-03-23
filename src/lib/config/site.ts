// src/lib/config/site.ts

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "カードショップ",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "こだわりのトレーディングカードをお届けします",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://example.com",

  contact: {
    email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "",
    phone: process.env.NEXT_PUBLIC_SUPPORT_PHONE || "",
    address: process.env.NEXT_PUBLIC_ADDRESS || "",
  },

  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
    twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "",
  },

  seo: {
    keywords: process.env.NEXT_PUBLIC_SEO_KEYWORDS || "トレーディングカード, ポケモンカード, ワンピースカード, TCG, カードショップ",
    ogImage: "/og-image.jpg",
    locale: "ja_JP",
  },

  tracking: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  },

  paymentMethods: ["銀行振込", "コンビニ払い"],

  logo: {
    src: "/logo.jpg",
    alt: process.env.NEXT_PUBLIC_SITE_NAME || "カードショップ",
  },

  categories: [
    {
      name: "Pokemon Cards",
      href: "/?game=pokemon",
      subcategories: [
        { name: "シングルカード", href: "/?game=pokemon&productType=SINGLE" },
        { name: "BOX・パック", href: "/?game=pokemon&productType=BOX" },
        { name: "PSA鑑定品", href: "/?game=pokemon&condition=PSA" },
        { name: "すべて", href: "/?game=pokemon" },
      ],
    },
    {
      name: "One Piece Cards",
      href: "/?game=onepiece",
      subcategories: [
        { name: "シングルカード", href: "/?game=onepiece&productType=SINGLE" },
        { name: "BOX・パック", href: "/?game=onepiece&productType=BOX" },
        { name: "PSA鑑定品", href: "/?game=onepiece&condition=PSA" },
        { name: "すべて", href: "/?game=onepiece" },
      ],
    },
    {
      name: "Other",
      href: "/?game=other",
      subcategories: [
        { name: "シングルカード", href: "/?game=other&productType=SINGLE" },
        { name: "BOX・パック", href: "/?game=other&productType=BOX" },
        { name: "すべて", href: "/?game=other" },
      ],
    },
  ],

  dbCategories: [
    { name: "Pokemon Cards", slug: "pokemon-cards", description: "ポケモンカードゲームのシングル、BOX、パック" },
    { name: "One Piece Cards", slug: "onepiece-cards", description: "ワンピースカードゲームのシングル、BOX、パック" },
  ],
}

export function getCopyright(): string {
  return `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`
}

export function getActiveSocialLinks(): Array<{ name: string; key: "instagram" | "twitter" | "facebook" | "youtube"; url: string }> {
  const { social } = siteConfig
  const links = [
    { name: "Instagram", key: "instagram" as const, url: social.instagram },
    { name: "Twitter", key: "twitter" as const, url: social.twitter },
    { name: "Facebook", key: "facebook" as const, url: social.facebook },
    { name: "YouTube", key: "youtube" as const, url: social.youtube },
  ]
  return links.filter((l) => l.url)
}
