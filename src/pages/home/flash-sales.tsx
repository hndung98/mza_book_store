import { useAtomValue } from "jotai";

import ProductGrid from "@/components/product-grid";
import Section from "@/components/section";
import { flashSaleProductsState } from "@/state";

export default function FlashSales() {
  const products = useAtomValue(flashSaleProductsState);

  return (
    <Section title="Flash Sales" viewMoreTo="/flash-sales">
      <ProductGrid products={products} />
    </Section>
  );
}
