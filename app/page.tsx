import ProductGrid from "@/components/product-grid/product-grid";
import products from "@/public/data.json";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <ProductGrid products={products} />
        </div>
      </main>
    </>
  );
}
