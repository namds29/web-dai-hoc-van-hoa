import { useEffect, useState } from "react";
import footerService from "src/services/footer/footer-service";
import HomepageService from "src/services/homepage/homepageService";


const Footer = () => {
  const [data, setData] = useState<any>([])
  const getPostList = async () => {
    try {
      const res = await footerService.listPostHomepage();
      console.log(res)
      if (res) {
        setData(res);
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getPostList()
  }, []);
  return (
    <div>
      {data && data.map((item: any) =>(
        <div>{item.content}</div>
      )
      )}
    </div>
  );
};
export default Footer;
