import { Suspense, useEffect, useRef, useState } from "react";

import ProductItem from "@/components/features/product-item";
import SearchBar from "@/components/features/search-bar";
import Section from "@/components/ui/section";
import { ProductItemSkeleton } from "@/components/ui/skeleton";
import { SearchIconLarge } from "@/components/ui/vectors";
import { products, recommendedProducts } from "@/utils/data";

export function SearchResult() {
  const searchResult = products.filter((product) =>
    product.name.toLowerCase().includes("")
  );

  return (
    <div className="w-full space-y-2 bg-section">
      <Section title={`Kết quả (${searchResult.length})`}>
        {searchResult.length ? (
          <div className="py-2 px-4 grid grid-cols-2 gap-4">
            {searchResult.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptySearchResult />
        )}
      </Section>
      {searchResult.length === 0 && <RecommendedProducts />}
    </div>
  );
}

export function EmptySearchResult() {
  return (
    <div className="p-6 space-y-4 flex flex-col items-center">
      <SearchIconLarge />
      <div className="text-inactive text-center text-2xs">
        Không có sản phẩm bạn tìm kiếm
      </div>
    </div>
  );
}

export function SearchResultSkeleton() {
  return (
    <Section title={`Kết quả`}>
      <div className="py-2 px-4 grid grid-cols-2 gap-4">
        <ProductItemSkeleton />
        <ProductItemSkeleton />
        <ProductItemSkeleton />
        <ProductItemSkeleton />
      </div>
    </Section>
  );
}

export function RecommendedProducts() {
  const data = recommendedProducts;

  return (
    <Section title="Gợi ý sản phẩm">
      <div className="py-2 px-4 flex space-x-2 overflow-x-auto">
        {data.map((product) => (
          <div
            className="flex-none"
            style={{ flexBasis: "calc((100vw - 48px) / 2)" }}
          >
            <ProductItem key={product.id} product={product} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default function SearchPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [localKeyword, setLocalKeyword] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    return () => {
      setKeyword("");
    };
  }, []);

  return (
    <>
      <div className="py-2">
        <SearchBar
          ref={inputRef}
          value={localKeyword}
          onChange={(e) => setLocalKeyword(e.currentTarget.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setKeyword(localKeyword);
            }
          }}
          onBlur={() => setKeyword(localKeyword)}
        />
      </div>
      {keyword ? (
        <Suspense fallback={<SearchResultSkeleton />}>
          <SearchResult />
        </Suspense>
      ) : (
        <RecommendedProducts />
      )}
    </>
  );
}
