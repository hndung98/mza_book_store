import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/components/layout/root-layout";
import CategoryListPage from "@/pages/catalog/category-list";
import ProductDetailPage from "@/pages/catalog/product-detail";
import ProductListPage from "@/pages/catalog/product-list";
import ContractsPage from "@/pages/contracts";
import HomePage from "@/pages/home";
import NotificationsPage from "@/pages/notifications";
import ProfilePage from "@/pages/profile";
import SearchPage from "@/pages/search";
import { getBasePath } from "@/utils/zma";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          handle: {
            logo: true,
          },
        },
        {
          path: "/contracts",
          element: <ContractsPage />,
          handle: {
            logo: true,
          },
        },
        {
          path: "/notifications",
          element: <NotificationsPage />,
          handle: {
            logo: true,
          },
        },
        {
          path: "/profile",
          element: <ProfilePage />,
          handle: {
            logo: true,
          },
        },
        {
          path: "/categories",
          element: <CategoryListPage />,
          handle: {
            title: "Danh mục sản phẩm",
            back: false,
          },
        },
        {
          path: "/flash-sales",
          element: <ProductListPage />,
          handle: {
            title: "Flash Sales",
          },
        },
        {
          path: "/category/:id",
          element: <ProductListPage />,
          handle: {
            title: ({ categories, params }) =>
              categories.find((c) => c.id === Number(params.id))?.name,
          },
        },
        {
          path: "/product/:id",
          element: <ProductDetailPage />,
          handle: {
            scrollRestoration: 0, // when user selects another product in related products, scroll to the top of the page
          },
        },
        {
          path: "/search",
          element: <SearchPage />,
          handle: {
            title: "Tìm kiếm",
          },
        },
      ],
    },
  ],
  { basename: getBasePath() }
);

export default router;
