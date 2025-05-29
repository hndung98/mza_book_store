import Carousel from "@/components/ui/carousel";
import book_banner_1 from "@/static/banners/book_banner_1.jpg";
import book_banner_2 from "@/static/banners/book_banner_2.jpg";
import book_banner_3 from "@/static/banners/book_banner_3.jpg";

export default function Banners() {
  const banners = [book_banner_1, book_banner_2, book_banner_3];

  return (
    <Carousel
      slides={banners.map((banner) => (
        <img className="w-full rounded" src={banner} />
      ))}
    />
  );
}
