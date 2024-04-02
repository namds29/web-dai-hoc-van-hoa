import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
  height: "500px",
  lineHeight: "160px",
  textAlign: "center",
  background: "white",
  objectFit: "contain",
};
const Banner = () => {
  return (
    <div className="w-full">
      <Carousel>
        <div>
          <img loading="lazy"style={contentStyle} src="/img/SLOGAN.png" alt="Slogan" />
        </div>
        <div>
          <img loading="lazy"style={contentStyle} src="/img/banner2.png" alt="banner 2" />
        </div>
        <div>
          <img loading="lazy"style={contentStyle} src="/img/banner3.png" alt="banner 3" />
        </div>
      </Carousel>
    </div>
  );
};
export default Banner;
