import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPostDataType, ITEM_NEWS } from "src/interfaces";
import HomepageService from "src/services/homepage/homepageService";

const NewsDetailComponent = () => {
  const { id } = useParams();
  const [data, setData] = useState<IPostDataType | null>(null);
  const [schoolActivityList, setSchoolActivityList] = useState<IPostDataType[]>(
    []
  );
  const [campusLifeList, setCampusLifeList] = useState<IPostDataType[]>([]);
  const [internationalList, setInternationalList] = useState<IPostDataType[]>(
    []
  );
  const url = import.meta.env.VITE_API_URL;
  const [randomItems, setRandomItems] = useState<IPostDataType[]>([]);
  const navigate = useNavigate();
  const selectRandomItem = (array: any) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  useEffect(() => {
    if (id) {
      getPostWithId(Number(id));
    }
  }, [id]);

  useEffect(() => {
    getPostList(ITEM_NEWS.SCHOOL_ACTIVITIES);
    getPostList(ITEM_NEWS.CAMPUS_LIFE);
    getPostList(ITEM_NEWS.INTERNATIONAL_COOPERATION);
  }, []);

  const getPostWithId = async (id: number) => {
    try {
      const res = await HomepageService.getPostById(id);
      if (res?.data) {
        setData(res?.data);
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  const getPostList = async (catId: string) => {
    try {
      const res = await HomepageService.listPostHomepageWithCategoryId(catId);
      if (res?.data) {
        switch (catId) {
          case ITEM_NEWS.SCHOOL_ACTIVITIES:
            setSchoolActivityList(
              res?.data.filter((item: IPostDataType) => item.isApproved)
            );
            break;
          case ITEM_NEWS.CAMPUS_LIFE:
            setCampusLifeList(
              res?.data.filter((item: IPostDataType) => item.isApproved)
            );
            break;
          case ITEM_NEWS.INTERNATIONAL_COOPERATION:
            setInternationalList(
              res?.data.filter((item: IPostDataType) => item.isApproved)
            );
            break;

          default:
            break;
        }
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const randomSchoolActivity = selectRandomItem(
      schoolActivityList.filter(
        (item) => item.categoryID === ITEM_NEWS.SCHOOL_ACTIVITIES
      )
    );
    const randomCampusLife = selectRandomItem(
      campusLifeList.filter((item) => item.categoryID === ITEM_NEWS.CAMPUS_LIFE)
    );
    const randomInternationalCooperation = selectRandomItem(
      internationalList.filter(
        (item) => item.categoryID === ITEM_NEWS.INTERNATIONAL_COOPERATION
      )
    );

    if (
      randomSchoolActivity &&
      randomCampusLife &&
      randomInternationalCooperation
    ) {
      setRandomItems([
        randomSchoolActivity,
        randomCampusLife,
        randomInternationalCooperation,
      ]);
    }
  }, [schoolActivityList, campusLifeList, internationalList]);

  return (
    <>
      <div className="bg-gray-100 min-h-[100vh] py-10 text-black flex flex-col lg:flex-row gap-10 w-full justify-center">
        {/* <section aria-label="link-page" className="hidden w-[10%]"></section> */}
        <section className="lg:w-[55%] px-8">
          <div className="flex w-full text-orange-500 font-bold mb-6 justify-center items-center">
            <div className="text-xl border-b-4">{data?.title}</div>
            <div></div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[50rem] text-justify">
              {data && (
                <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
              )}
            </div>
          </div>
        </section>
        <section aria-label="news relate" className="px-8 lg:w-[15%]">
          <div className="text-orange-500 font-bold border-b-4">
            NEWS YOU MAY INTEREST
          </div>
          <div className="mt-6">
            {randomItems.map((item) => (
              <div
                key={item.id}
                className="mt-5 cursor-pointer hover:underline"
                onClick={() => navigate(`/news/${item.id}`)}
              >
                <div className="h-[10rem] w-full rounded-md mb-2">
                  <img
                    className="w-full shadow-xl rounded-md h-full object-cover translate-z-1"
                    src={`${url}${item.path ?? ""}`}
                    alt=""
                  />
                </div>
                <div className="font-bold text-sm">{item.title}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section>
        <div className="flex gap-4 text-white">
          <div className="w-full rounded">
            <div className="w-full flex items-center h-full">
              <img
                className="w-full h-full object-contain overflow-hidden rounded"
                src="/img/bvhtt.png"
                alt="Bộ văn hóa thể thao và du lịch"
              />
            </div>
          </div>
          <div className="w-full rounded bg-white">
            <div className="w-full flex items-center h-full">
              <img
                className="w-full h-[150px] object-contain overflow-hidden rounded"
                src="/img/bogd.jpeg"
                alt="Bộ giáo dục và đào tạo"
              />
            </div>
          </div>
          <div className="w-full rounded">
            <div className="w-full flex items-center h-full">
              <img
                className="w-full h-[200px] object-contain overflow-hidden rounded"
                src="/img/baothanhhoa.png"
                alt="Báo Thanh Hóa"
              />
            </div>
          </div>
          <div className="w-full rounded">
            <div className="w-full flex items-center h-full">
              <a
                href="https://en-us.thanhhoa.gov.vn/portal/Pages/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-full h-full object-contain overflow-hidden rounded"
                  src="/img/cttdt.jpg"
                  alt="Cổng thông tin điện tử Thanh Hóa"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetailComponent;
