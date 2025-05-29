import { useNavigate } from "react-router-dom";

import HorizontalDivider from "@/components/ui/horizontal-divider";
import SearchBar from "@/components/features/search-bar";
import Banners from "@/pages/home/banners";
import FlashSales from "@/pages/home/flash-sales";
import ProductTabs from "@/pages/home/product-tabs";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-section">
      <div className="bg-background pt-2">
        <SearchBar onClick={() => navigate("/search")} />
        <Banners />
      </div>
      <div className="bg-background space-y-2 mt-2">
        <ProductTabs />
      </div>
      <HorizontalDivider />
      <FlashSales />
    </div>
  );
};

export default HomePage;
