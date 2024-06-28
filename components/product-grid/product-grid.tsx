import { Product } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="px-4 pb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray w-90 h-full rounded-lg px-4 py-2"
          >
            <Link href={`/products/${product.id}`}>
              <div className="flex justify-center ">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={500}
                  priority
                />
              </div>
              <div className="flex justify-between">
                <h2>{product.title}</h2>
                <div>${product.price}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
