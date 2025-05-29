import { useMemo } from "react";

import ProductGrid from "@/components/features/product-grid";
import { products } from "@/utils/data";

export interface RelatedProductsProps {
  currentProductId: number;
}

export default function RelatedProducts(props: RelatedProductsProps) {
  const otherProducts = useMemo(
    () => products.filter((product) => product.id !== props.currentProductId),
    [products, props.currentProductId]
  );

  return <ProductGrid replace products={otherProducts} />;
}
