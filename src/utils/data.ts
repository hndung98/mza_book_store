import { Category, Product } from "@/types";

export const categories = [
  {
    id: 1,
    name: "Tiểu thuyết",
    image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
  },
  {
    id: 2,
    name: "Trinh thám",
    image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
  },
  {
    id: 3,
    name: "Lịch sử",
    image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
  },
  {
    id: 4,
    name: "Self-help",
    image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
  },
] as Category[];

export const products = [
  {
    id: 1,
    category: {
      id: 1,
      name: "Tiểu thuyết",
      image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
    },
    name: "Les Miserables",
    price: 199000,
    originalPrice: 280000,
    image: "https://lukakuvic.vercel.app/image/books/les-miserables.jpg",
    details: [
      {
        title: "Ghi chú",
        content:
          "Giá sản phẩm trên x.com đã bao gồm thuế theo luật hiện hành.\n- Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...",
      },
      {
        title: "Hướng dẫn sử dụng",
        content:
          "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive.\n- Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
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
    ],
  },
  {
    id: 2,
    category: {
      id: 1,
      name: "Tiểu thuyết",
      image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
    },
    name: "The Godfather",
    price: 199000,
    originalPrice: 250000,
    image: "https://lukakuvic.vercel.app/image/books/the-godfather.jpg",
    details: [
      {
        title: "Ghi chú",
        content:
          "Giá sản phẩm trên x.com đã bao gồm thuế theo luật hiện hành.\n- Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...",
      },
      {
        title: "Hướng dẫn sử dụng",
        content:
          "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive.\n- Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
      },
    ],
  },
  {
    id: 3,
    category: {
      id: 2,
      name: "Trinh thám",
      image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
    },
    name: "Sherlock Holmes 1",
    price: 199000,
    originalPrice: 300000,
    image: "https://lukakuvic.vercel.app/image/books/sherlock-holmes-1.jpg",
    details: [
      {
        title: "Ghi chú",
        content:
          "Giá sản phẩm trên x.com đã bao gồm thuế theo luật hiện hành.\n- Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...",
      },
      {
        title: "Hướng dẫn sử dụng",
        content:
          "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive.\n- Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
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
    ],
  },
] as Product[];

export const flashSaleProducts = [
  {
    id: 1,
    category: {
      id: 1,
      name: "Tiểu thuyết",
      image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
    },
    name: "Les Miserables",
    price: 199000,
    originalPrice: 280000,
    image: "https://lukakuvic.vercel.app/image/books/les-miserables.jpg",
    details: [
      {
        title: "Ghi chú",
        content:
          "Giá sản phẩm trên x.com đã bao gồm thuế theo luật hiện hành.\n- Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...",
      },
      {
        title: "Hướng dẫn sử dụng",
        content:
          "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive.\n- Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
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
    ],
  },
  {
    id: 2,
    category: {
      id: 1,
      name: "Tiểu thuyết",
      image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
    },
    name: "The Godfather",
    price: 199000,
    originalPrice: 250000,
    image: "https://lukakuvic.vercel.app/image/books/the-godfather.jpg",
    details: [
      {
        title: "Ghi chú",
        content:
          "Giá sản phẩm trên x.com đã bao gồm thuế theo luật hiện hành.\n- Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...",
      },
      {
        title: "Hướng dẫn sử dụng",
        content:
          "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive.\n- Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
      },
    ],
  },
] as Product[];

export const recommendedProducts = [
  {
    id: 1,
    category: {
      id: 1,
      name: "Tiểu thuyết",
      image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
    },
    name: "Les Miserables",
    price: 199000,
    originalPrice: 280000,
    image: "https://lukakuvic.vercel.app/image/books/les-miserables.jpg",
    details: [
      {
        title: "Ghi chú",
        content:
          "Giá sản phẩm trên x.com đã bao gồm thuế theo luật hiện hành.\n- Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...",
      },
      {
        title: "Hướng dẫn sử dụng",
        content:
          "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive.\n- Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
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
    ],
  },
  {
    id: 2,
    category: {
      id: 1,
      name: "Tiểu thuyết",
      image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
    },
    name: "The Godfather",
    price: 199000,
    originalPrice: 250000,
    image: "https://lukakuvic.vercel.app/image/books/the-godfather.jpg",
    details: [
      {
        title: "Ghi chú",
        content:
          "Giá sản phẩm trên x.com đã bao gồm thuế theo luật hiện hành.\n- Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...",
      },
      {
        title: "Hướng dẫn sử dụng",
        content:
          "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive.\n- Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
      },
    ],
  },
  {
    id: 3,
    category: {
      id: 2,
      name: "Trinh thám",
      image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
    },
    name: "Sherlock Holmes 1",
    price: 199000,
    originalPrice: 300000,
    image: "https://lukakuvic.vercel.app/image/books/sherlock-holmes-1.jpg",
    details: [
      {
        title: "Ghi chú",
        content:
          "Giá sản phẩm trên x.com đã bao gồm thuế theo luật hiện hành.\n- Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...",
      },
      {
        title: "Hướng dẫn sử dụng",
        content:
          "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive.\n- Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
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
    ],
  },
] as Product[];

export const getProductById = (id: number) => {
  let product = products.find((product) => product.id === id);
  return product || products[0];
};
