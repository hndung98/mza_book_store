import ProductGrid from "@/components/features/product-grid";
import HorizontalDivider from "@/components/ui/horizontal-divider";
import ProductFilter from "@/pages/catalog/product-filter";
import { products } from "@/utils/data";

export default function ProductListPage() {
  const data = products;

  return (
    <>
      <ProductFilter />
      <HorizontalDivider />
      <ProductGrid products={data} className="pt-4 pb-[13px]" />
    </>
  );
}
