import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DATA_DETAIL } from "src/data/data-detail";

type DataDetail = {
  id: string,
  title: string,
  category: string,
  content: string
}
const NewsDetailComponent = () => {
  const { id } = useParams();
  const [data, setData] = useState<DataDetail | null>(null)
  useEffect(() => {
    if (id) {
      const resDetail: DataDetail = DATA_DETAIL.filter(item => item.id === id)[0];
      setData(resDetail)
    }
  }, [id])
  console.log(DATA_DETAIL.filter(item => item.id == id))
  return (
    <div className="bg-gray-100 min-h-[100vh] py-10 text-black">
      <div className="flex text-orange-500 font-bold mb-6 justify-center items-center">
        <span className="text-xl border-b-4">{data?.title}</span>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[50rem]" >
          {data && (
            <div dangerouslySetInnerHTML={{ __html: data.content }}>
            </div>
          )
          }
        </div>

      </div>
    </div>
  );
};

export default NewsDetailComponent;
