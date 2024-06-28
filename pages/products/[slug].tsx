import { GetStaticPaths, GetStaticProps } from "next";
import { Product } from "@/app/types";
import Image from "next/image";
import MainHeader from "@/components/main-header/main-header";
import "@/pages/globals.css";
import styles from "./slug.module.css";
import QuantityCounter from "@/components/quantity-counter/quantity-counter";

interface Props {
  product: Product;
}

const ProductPageComponent = ({ product }: Props) => {
  return (
    <div>
      <div className="header">
        <MainHeader />
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={`/images/${product.image.split("/").slice(-1)[0]}`}
            alt={product.title}
            width={500}
            height={600}
            priority
          />
        </div>
        <div className={styles.productInfo}>
          <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p className="">${product.price}</p>
            <select>
              {product.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <select>
              {product.color.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div>
            <div className="quantity">
              <QuantityCounter minValue={1} maxValue={5} />
            </div>

            <button type="button" className="cart">
              ADD TO CART +
            </button>

            <p>
              <b>Product details</b>
            </p>
            <p>
              <b>Material</b>
            </p>
            <p>{product.material}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await import("../../public/data.json");

  const paths = products.default.map((product) => ({
    params: { slug: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const products = await import("../../public/data.json");

  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const product = products.default.find(
    (product) => product.id === params.slug
  );

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductPageComponent;
