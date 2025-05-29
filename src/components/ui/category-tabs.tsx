import { useState } from "react";

import Tabs from "@/components/ui/tabs";

export default function CategoryTabs() {
  const tabs = ["Tất cả", "Quần", "Áo"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Tabs
      items={tabs}
      value={tabs[selectedIndex]}
      onChange={(tab) => setSelectedIndex(tabs.indexOf(tab))}
      renderLabel={(item) => item}
    />
  );
}
