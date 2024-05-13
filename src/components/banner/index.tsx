import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { IBannerDataType, ITEM_HOMEPAGE } from "src/interfaces";
import HomepageService from "src/services/homepage/homepageService";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  height: "100%",
  lineHeight: "160px",
  textAlign: "center",
  background: "white",
  objectFit: "contain",
};
const Banner = () => {
  const [bannerData, setBannerData] = useState<IBannerDataType[]>([]);

  const getBannerList = async () => {
    try {
      const res = await HomepageService.listBannerHomepage();
      if (res?.data) {
        setBannerData(res?.data);
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getBannerList();
  }, []);

  return (
    <div className="w-full">
      <Carousel autoplay>
        {bannerData
          .filter((item) => item.categoryID === ITEM_HOMEPAGE.BANNER_IMG)
          .map((item) => {
            return (
              <div key={item.id}>
                <img
                  style={contentStyle}
                  src={`${import.meta.env.VITE_API_URL}${item.path}`}
                  alt="Slogan"
                />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};
export default Banner;
