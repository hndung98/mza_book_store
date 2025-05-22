import { useState } from "react";

import Section from "@/components/section";
import Tabs from "@/components/tabs";
import TransitionLink from "@/components/transition-link";

type ProductType = {
  id: string;
  name: string;
  image: string;
};
export default function ProductTabs() {
  const tabs = ["Best Sellers", "On Sale", "New Arrivals"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const lstBestSellers = [
    {
      id: "p-001",
      name: "LM",
      image: "https://lukakuvic.vercel.app/image/books/les-miserables.jpg",
    },
    {
      id: "p-002",
      name: "Sapiens",
      image: "https://lukakuvic.vercel.app/image/books/sapiens.jpg",
    },
    {
      id: "p-003",
      name: "SH1",
      image: "https://lukakuvic.vercel.app/image/books/sherlock-holmes-1.jpg",
    },
    {
      id: "p-004",
      name: "Gf",
      image: "https://lukakuvic.vercel.app/image/books/the-godfather.jpg",
    },
    {
      id: "p-005",
      name: "RT",
      image: "https://lukakuvic.vercel.app/image/books/the-rainbow-troops.jpg",
    },
  ] as ProductType[];
  const lstOnSale = [
    {
      id: "p-003",
      name: "SH1",
      image: "https://lukakuvic.vercel.app/image/books/sherlock-holmes-1.jpg",
    },
    {
      id: "p-004",
      name: "Gf",
      image: "https://lukakuvic.vercel.app/image/books/the-godfather.jpg",
    },
    {
      id: "p-005",
      name: "RT",
      image: "https://lukakuvic.vercel.app/image/books/the-rainbow-troops.jpg",
    },
    {
      id: "p-006",
      name: "TAGR",
      image: "https://lukakuvic.vercel.app/image/books/think-and-grow-rich.jpg",
    },
    {
      id: "p-007",
      name: "WAP",
      image: "https://lukakuvic.vercel.app/image/books/war-and-peace.jpg",
    },
  ] as ProductType[];
  const lstNewArrivals = [
    {
      id: "p-004",
      name: "Gf",
      image: "https://lukakuvic.vercel.app/image/books/the-godfather.jpg",
    },
    {
      id: "p-005",
      name: "RT",
      image: "https://lukakuvic.vercel.app/image/books/the-rainbow-troops.jpg",
    },
    {
      id: "p-006",
      name: "TAGR",
      image: "https://lukakuvic.vercel.app/image/books/think-and-grow-rich.jpg",
    },
    {
      id: "p-007",
      name: "WAP",
      image: "https://lukakuvic.vercel.app/image/books/war-and-peace.jpg",
    },
  ] as ProductType[];
  return (
    <>
      <Tabs
        items={tabs}
        value={tabs[selectedIndex]}
        onChange={(tab) => {
          setSelectedIndex(tabs.indexOf(tab));
        }}
        renderLabel={(item) => item}
      />
      <Section title="Products" viewMoreTo="/categories">
        <div className="pt-2.5 pb-4 flex space-x-6 overflow-x-auto px-4">
          {selectedIndex === 0 && <ProductCard products={lstBestSellers} />}
          {selectedIndex === 1 && <ProductCard products={lstOnSale} />}
          {selectedIndex === 2 && <ProductCard products={lstNewArrivals} />}
        </div>
      </Section>
    </>
  );
}

function ProductCard({ products }: { products: ProductType[] }) {
  return (
    <>
      {products.map((product) => (
        <TransitionLink
          key={product.id}
          className="flex flex-col items-center space-y-2 flex-none basis-[70px] overflow-hidden cursor-pointer"
          to={`/category/${product.id}`}
        >
          <img
            src={product.image}
            className="w-[70px] h-[70px] object-cover rounded-xl border-[0.5px] border-black/15"
            alt={product.name}
          />
          <div className="text-center text-sm w-full line-clamp-2 text-subtitle">
            {product.name}
          </div>
        </TransitionLink>
      ))}
    </>
  );
}
