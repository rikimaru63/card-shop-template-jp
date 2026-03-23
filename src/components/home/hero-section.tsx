"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config/site"
import { businessConfig } from "@/lib/config/business"

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main hero — centered, massive typography */}
        <div className="flex flex-col items-center text-center pt-20 pb-16 md:pt-28 md:pb-20">
          <motion.p
            className="text-sm md:text-base font-medium text-[hsl(var(--accent))] mb-4 tracking-wide"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            新しいコレクションの始まり。
          </motion.p>

          <motion.h1
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            あなたの探している
            <br />
            一枚が、ここに。
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed font-light"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            シングルカード、BOX、PSA鑑定品を厳選。
            <br className="hidden md:block" />
            全国送料{businessConfig.currency.symbol}{businessConfig.shipping.baseCost.toLocaleString()}円、{businessConfig.currency.symbol}{businessConfig.shipping.freeThreshold.toLocaleString()}以上で送料無料。
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--accent))] text-white px-8 py-3.5 text-base font-medium hover:opacity-90 transition-opacity"
            >
              商品を見る
            </Link>
            <Link
              href="/products?isNewArrival=true"
              className="inline-flex items-center justify-center rounded-full text-[hsl(var(--accent))] px-8 py-3.5 text-base font-medium hover:opacity-70 transition-opacity"
            >
              新着を見る →
            </Link>
          </motion.div>
        </div>

        {/* Product showcase cards — floating in a row */}
        <motion.div
          className="relative flex justify-center gap-4 md:gap-6 pb-20 md:pb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { label: "シングル", sub: "GRADE A", bg: "bg-gradient-to-b from-gray-50 to-gray-100", rotate: "-3deg" },
            { label: "BOX", sub: "SEALED", bg: "bg-gradient-to-b from-white to-gray-50", rotate: "0deg", featured: true },
            { label: "PSA鑑定品", sub: "PSA 10", bg: "bg-gradient-to-b from-gray-50 to-gray-100", rotate: "3deg" },
          ].map((card, i) => (
            <motion.div
              key={i}
              className={`relative w-[140px] md:w-[200px] aspect-[3/4] rounded-2xl ${card.bg} border border-gray-200/60 ${card.featured ? 'shadow-2xl scale-105 md:scale-110 z-10' : 'shadow-lg'}`}
              style={{ rotate: card.rotate }}
              whileHover={{ rotate: "0deg", scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <span className="text-xs text-gray-400 mb-2 tracking-widest uppercase">{card.sub}</span>
                <span className="text-sm md:text-base font-medium text-gray-700">{card.label}</span>
              </div>
              {card.featured && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-medium px-3 py-1 rounded-full">
                  人気
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle bottom separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  )
}
