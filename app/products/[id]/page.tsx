import { products } from "@/lib/data";
import ProductDetailPage from "@/app/products/[id]/product-detail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  const relatedProducts = products
    .filter((p) => p.id !== id && p.category === product?.category)
    .slice(0, 3);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        Product not found
      </div>
    );
  }

  return <ProductDetailPage product={product} relatedProducts={relatedProducts} />;
}
