import ProductGrid from "@/components/features/product-grid";
import Section from "@/components/ui/section";
import { products } from "@/utils/data";

export default function FlashSales() {
  return (
    <Section title="Flash Sales" viewMoreTo="/flash-sales">
      <ProductGrid products={products} />
    </Section>
  );
}
