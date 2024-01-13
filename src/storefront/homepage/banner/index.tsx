
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
    margin: 0,
    width: "100%",
    height: "400px",
    lineHeight: "160px",
    textAlign: "center",
    background: "rgb(254 202 202)",
    objectFit: "cover",
  };
const Banner = () => {

    return (
        <div className="w-full">
        <Carousel>
          <div>
            <img style={contentStyle} src="/img/banner1.png" alt="" />
          </div>
          <div>
            <img style={contentStyle} src="/img/banner2.png" alt="" />
          </div>
          <div>
            <img style={contentStyle} src="/img/banner3.png" alt="" />
          </div>
        </Carousel>
      </div>
    )
}
export default Banner