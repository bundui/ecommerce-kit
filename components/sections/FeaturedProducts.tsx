import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function FeaturedProducts() {
  // Take first 6 products as featured
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Featured Products</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover our most popular items, carefully selected for their exceptional quality and
            customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
