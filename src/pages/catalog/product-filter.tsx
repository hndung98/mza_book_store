import { Suspense, useState } from "react";

import { Select } from "@/components/features/lazyloaded";
import { SelectSkeleton } from "@/components/ui/skeleton";
import { Color } from "@/types";

export default function ProductFilter() {
  const sizes = ["S", "M", "L", "XL"];
  const [size, setSize] = useState<string | undefined>("S");
  const colors = [
    {
      name: "Đỏ",
      hex: "#FFC7C7",
    },
    {
      name: "Xanh dương",
      hex: "#DBEBFF",
    },
    {
      name: "Xanh lá",
      hex: "#D1F0DB",
    },
    {
      name: "Xám",
      hex: "#D9E2ED",
    },
  ];
  const [color, setColor] = useState<string | undefined>("Đỏ");

  return (
    <div className="flex px-4 py-3 space-x-2 overflow-x-auto">
      <Suspense fallback={<SelectSkeleton width={110} />}>
        <Select
          items={sizes}
          value={size}
          onChange={setSize}
          renderTitle={(selectedSize?: string) =>
            `Kích thước${selectedSize ? `: ${selectedSize}` : ""}`
          }
          renderItemKey={(size: string) => String(size)}
        />
      </Suspense>
      <Suspense fallback={<SelectSkeleton width={95} />}>
        <Select
          items={colors}
          value={color}
          onChange={setColor}
          renderTitle={(selectedColor?: Color) =>
            `Màu sắc${selectedColor ? `: ${selectedColor.name}` : ""}`
          }
          renderItemLabel={(color: Color) => color.name}
          renderItemKey={(color: Color) => color.name}
        />
      </Suspense>
      {(color !== undefined || size !== undefined) && (
        <button
          className="bg-primary text-white rounded-full h-8 flex-none px-3"
          onClick={() => {
            setColor(undefined);
            setSize(undefined);
          }}
        >
          Xoá bộ lọc
        </button>
      )}
    </div>
  );
}
