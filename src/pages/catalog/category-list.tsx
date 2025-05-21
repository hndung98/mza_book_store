import CategoryTabs from "@/components/category-tabs";
import SearchBar from "@/components/search-bar";
import TransitionLink from "@/components/transition-link";
import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import { categoriesState } from "@/state";
import { useEffect, useState } from "react";
import { Icon } from "zmp-ui";

const API_URL = "https://lukakuvic.vercel.app/api/native/categories";
type CategoryType = {
  id: string;
  name: string;
};
export default function CategoryListPage() {
  const navigate = useNavigate();
  const [newCategories, setNewCategories] = useState<CategoryType[]>([]);

  const categories = useAtomValue(categoriesState);

  const token = import.meta.env.VITE_API_ACCESS_TOKEN || "";

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          const listCategories = data.payload as CategoryType[];
          setNewCategories(listCategories);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="py-2">
        <SearchBar onClick={() => navigate("/search")} />
      </div>
      <CategoryTabs />
      {/* <div className="grid grid-cols-4 p-4 gap-x-4 gap-y-8">
        {categories.map((category) => (
          <TransitionLink
            key={category.id}
            className="flex flex-col items-center space-y-2 overflow-hidden cursor-pointer"
            to={`/category/${category.id}`}
          >
            <img
              src={category.image}
              className="aspect-square object-cover rounded-full border-[0.5px] border-black/15"
              alt={category.name}
            />
            <div className="text-center text-sm w-full line-clamp-2 text-subtitle">
              {category.name}
            </div>
          </TransitionLink>
        ))}
      </div> */}
      <div className="grid grid-cols-4 p-4 gap-x-4 gap-y-8">
        {newCategories &&
          newCategories?.map((c) => (
            <div className="flex flex-col items-center space-y-2 overflow-hidden cursor-pointer">
              <Icon icon="zi-gallery" />
              <p className="text-sm" key={c.id}>
                {c.name}
              </p>
            </div>
          ))}
      </div>
    </>
  );
}
