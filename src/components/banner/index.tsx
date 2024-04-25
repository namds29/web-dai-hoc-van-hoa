import { Carousel } from "antd";

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
  return (
    <div className="w-full">
      <Carousel autoplay>
        <div>
          <img style={contentStyle} src="/img/ban2.png" alt="Slogan" />
        </div>
        <div>
          <img style={contentStyle} src="/img/ban1.png" alt="banner 1" />
        </div>
        <div>
          <img style={contentStyle} src="/img/ban3.png" alt="banner 4" />
        </div>
        <div>
          <img style={contentStyle} src="/img/ban4.png" alt="banner 5" />
        </div>
        <div>
          <img style={contentStyle} src="/img/ban5.jpg" alt="banner 6" />
        </div>
        <div>
          <img
            style={contentStyle}
            src="/img/inter-partner.png"
            alt="banner 2"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default Banner;
