import { useEffect, useState } from "react";
import { getBanners, type IBanner } from "~/firebase/banner";

export default function Welcome() {
  const [banners, setBanners] = useState<IBanner[]>([]);

  useEffect(() => {
    getBanners().then((banners) => setBanners(banners));
  }, []);

  return (
    <div>
      Welcome
      {banners.map((banner) => (
        <div key={banner.id}>{banner.title}</div>
      ))}
    </div>
  );
}
