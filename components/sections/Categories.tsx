import Link from "next/link"
import { Headphones, Watch, Backpack, Smartphone, Camera, Gamepad2 } from "lucide-react"
import { categories } from "@/lib/data"

const categoryIcons = {
  Audio: Headphones,
  Wearables: Watch,
  Accessories: Backpack,
  Mobile: Smartphone,
  Photography: Camera,
  Gaming: Gamepad2,
} as const

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600">Find exactly what you're looking for in our organized categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = categoryIcons[category.name as keyof typeof categoryIcons]
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
