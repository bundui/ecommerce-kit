"use client";

import { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products
    .filter((product) => selectedCategory === "all" || product.category === selectedCategory)
    .filter((product) => {
      if (priceRange === "all") return true;
      if (priceRange === "under-50") return product.price < 50;
      if (priceRange === "50-100") return product.price >= 50 && product.price <= 100;
      if (priceRange === "100-200") return product.price >= 100 && product.price <= 200;
      if (priceRange === "over-200") return product.price > 200;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "newest") return b.id.localeCompare(a.id);
      return 0;
    });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Filters Sidebar */}
        <div className="lg:w-64">
          <div className="mb-4 lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            {/* Category Filter */}
            <div>
              <h3 className="mb-3 text-xs tracking-widest uppercase">Category</h3>
              <div className="space-y-2">
                {["all", "audio", "wearables", "accessories"].map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="capitalize">
                      {category === "all" ? "All Products" : category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="mb-3 text-xs tracking-widest uppercase">Price Range</h3>
              <div className="space-y-2">
                {[
                  { value: "all", label: "All Prices" },
                  { value: "under-50", label: "Under $50" },
                  { value: "50-100", label: "$50 - $100" },
                  { value: "100-200", label: "$100 - $200" },
                  { value: "over-200", label: "Over $200" }
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value={option.value}
                      checked={priceRange === option.value}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Products ({filteredProducts.length})
            </h1>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="focus:ring-primary appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 focus:border-transparent focus:ring-2">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
