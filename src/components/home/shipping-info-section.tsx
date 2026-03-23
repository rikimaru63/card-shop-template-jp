"use client"

import {
  Truck,
  Package,
  CreditCard,
  CheckCircle2,
  Box,
  Tags,
  Gift,
  Plane
} from "lucide-react"
import { businessConfig } from "@/lib/config/business"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated-section"

export function ShippingInfoSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Purchase Flow */}
        <div className="mb-12">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-center mb-8">
              ご注文の流れ
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Step 1 */}
            <div className="relative bg-white rounded-lg border p-4 md:p-6 text-center shadow-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="flex justify-center mb-3 mt-2">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1">商品を選ぶ</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                お気に入りの商品をカートに追加
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-lg border p-4 md:p-6 text-center shadow-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="flex justify-center mb-3 mt-2">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1">お支払い</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                銀行振込またはコンビニ払い
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-lg border p-4 md:p-6 text-center shadow-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div className="flex justify-center mb-3 mt-2">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1">発送</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                丁寧に梱包してお届け
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative bg-white rounded-lg border p-4 md:p-6 text-center shadow-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div className="flex justify-center mb-3 mt-2">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1">お届け</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                ご自宅で商品をお受け取り
              </p>
            </div>
          </div>
        </div>

        {/* Shipping Rules */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8">
            送料について
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Single Cards */}
            <div className="bg-white rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Tags className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg">シングルカード</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {businessConfig.currency.symbol}{businessConfig.shipping.freeThreshold.toLocaleString()}以上で<span className="font-semibold text-foreground">送料無料</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {businessConfig.currency.symbol}{businessConfig.shipping.freeThreshold.toLocaleString()}未満: <span className="font-semibold text-foreground">{businessConfig.currency.symbol}{businessConfig.shipping.baseCost.toLocaleString()}</span>
                </p>
              </div>
            </div>

            {/* BOX */}
            <div className="bg-white rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Box className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg">BOX・パック</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{businessConfig.box.minimumQuantity}BOXから</span>ご注文可能
                </p>
                <p className="text-sm text-muted-foreground">
                  {businessConfig.currency.symbol}{businessConfig.shipping.freeThreshold.toLocaleString()}以上で送料無料
                </p>
                <p className="text-xs text-orange-600 mt-2">
                  ※BOXの種類は組み合わせ自由
                </p>
              </div>
            </div>

            {/* Others */}
            <div className="bg-white rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Gift className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg">その他</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-green-600">送料込み</span>の価格です
                </p>
                <p className="text-sm text-muted-foreground">
                  追加の送料はかかりません
                </p>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-white rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Plane className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">配送方法</p>
                  <h3 className="font-bold text-lg">宅配便</h3>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  商品は実店舗に在庫がございます。お支払い確認後、翌営業日に発送いたします。（土日祝は休業）
                </p>
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            ※ シングルカード + BOXの合計が{businessConfig.currency.symbol}{businessConfig.shipping.freeThreshold.toLocaleString()}以上で送料無料
          </p>
        </div>
      </div>
    </section>
  )
}
