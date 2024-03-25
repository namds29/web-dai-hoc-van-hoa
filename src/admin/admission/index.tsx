// import styles from "./index.module.scss";
import { Collapse, CollapseProps } from "antd";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Undergraduate",
    children: (
      <>
        <div>
          <p>- Overview</p>
          <p>- Programs</p>
          <p>- Majors</p>
          <p>- Requirements</p>
          <p>- Apply</p>
        </div>
      </>
    ),
  },
  {
    key: "2",
    label: "Graduate",
    children: (
      <>
        <div>
          <p>- Overview</p>
          <p>- Programs</p>
          <p>- Majors</p>
          <p>- Requirements</p>
          <p>- Apply</p>
        </div>
      </>
    ),
  },
  {
    key: "3",
    label: "Exchange programs",
    children: (
      <>
        <div>
          <p>- Overview</p>
          <p>- Programs</p>
          <p>- Majors</p>
          <p>- Requirements</p>
          <p>- Apply</p>
        </div>
      </>
    ),
  },
  {
    key: "4",
    label: "Vietnamese intensive courses",
    children: (
      <>
        <div>
          <p>- Overview</p>
          <p>- Programs</p>
          <p>- Majors</p>
          <p>- Requirements</p>
          <p>- Apply</p>
        </div>
      </>
    ),
  },
];
const AdminAdmission = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <section className="w-full">
      <div className="w-full h-400">
        <img
          className="w-full h-400 object-cover"
          src="/img/banner3.png"
          alt=""
        />
      </div>
      <section className="bg-gray-100 w-full text-orange-500 font-bold  justify-between items-center px-20 py-8">
        <p className="text-3xl border-b-4 text-center">Admission</p>
        <section id="functional_unit">
          <div className="flex text-black mt-4 gap-8">
            <section className="w-1/3">
              <div className="bg-orange-300 rounded-xl">
                <Collapse
                  items={items}
                  defaultActiveKey={["1"]}
                  onChange={onChange}
                />
              </div>
            </section>
            <section className="w-2/3">
              <div>
                <div className="bg-orange-300 rounded p-3">Overview</div>
                <p className="p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus a posuere nibh, feugiat semper metus. Sed eu justo
                  eget massa tincidunt fermentum. Vestibulum a sollicitudin leo,
                  in tincidunt ligula. Proin vel dolor tellus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Quisque accumsan porta
                  augue ac vulputate. Sed vel metus in lacus feugiat
                  pellentesque ac sed metus. Maecenas vel posuere sem, vel
                  efficitur purus. Cras leo enim, finibus ac porttitor nec,
                  rutrum id magna. Pellentesque in lectus quam. Mauris ante
                  nunc, fringilla id mollis et, fringilla vitae risus. Praesent
                  consequat rutrum luctus. Phasellus suscipit, ligula sed
                  sodales vestibulum, quam ligula sagittis orci, nec auctor
                  sapien metus vitae risus. Nam nec sodales neque. Proin mollis
                  tempus mauris sed varius. Phasellus elementum diam in velit
                  porta pellentesque. Nullam rhoncus pulvinar efficitur. Nulla
                  eget hendrerit magna. Ut consequat et tellus sit amet
                  eleifend.
                </p>
              </div>
              <div>
                <div className="bg-orange-300 rounded p-3">Programs</div>
                <p className="p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus a posuere nibh, feugiat semper metus. Sed eu justo
                  eget massa tincidunt fermentum. Vestibulum a sollicitudin leo,
                  in tincidunt ligula. Proin vel dolor tellus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Quisque accumsan porta
                  augue ac vulputate. Sed vel metus in lacus feugiat
                  pellentesque ac sed metus. Maecenas vel posuere sem, vel
                  efficitur purus. Cras leo enim, finibus ac porttitor nec,
                  rutrum id magna. Pellentesque in lectus quam. Mauris ante
                  nunc, fringilla id mollis et, fringilla vitae risus. Praesent
                  consequat rutrum luctus. Phasellus suscipit, ligula sed
                  sodales vestibulum, quam ligula sagittis orci, nec auctor
                  sapien metus vitae risus. Nam nec sodales neque. Proin mollis
                  tempus mauris sed varius. Phasellus elementum diam in velit
                  porta pellentesque. Nullam rhoncus pulvinar efficitur. Nulla
                  eget hendrerit magna. Ut consequat et tellus sit amet
                  eleifend.
                </p>
              </div>
              <div>
                <div className="bg-orange-300 rounded p-3">MAJORS</div>
                <p className="p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus a posuere nibh, feugiat semper metus. Sed eu justo
                  eget massa tincidunt fermentum. Vestibulum a sollicitudin leo,
                  in tincidunt ligula. Proin vel dolor tellus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Quisque accumsan porta
                  augue ac vulputate. Sed vel metus in lacus feugiat
                  pellentesque ac sed metus. Maecenas vel posuere sem, vel
                  efficitur purus. Cras leo enim, finibus ac porttitor nec,
                  rutrum id magna. Pellentesque in lectus quam. Mauris ante
                  nunc, fringilla id mollis et, fringilla vitae risus. Praesent
                  consequat rutrum luctus. Phasellus suscipit, ligula sed
                  sodales vestibulum, quam ligula sagittis orci, nec auctor
                  sapien metus vitae risus. Nam nec sodales neque. Proin mollis
                  tempus mauris sed varius. Phasellus elementum diam in velit
                  porta pellentesque. Nullam rhoncus pulvinar efficitur. Nulla
                  eget hendrerit magna. Ut consequat et tellus sit amet
                  eleifend.
                </p>
              </div>
              <div>
                <div className="bg-orange-300 rounded p-3">REQUIREMENTS</div>
                <p className="p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus a posuere nibh, feugiat semper metus. Sed eu justo
                  eget massa tincidunt fermentum. Vestibulum a sollicitudin leo,
                  in tincidunt ligula. Proin vel dolor tellus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Quisque accumsan porta
                  augue ac vulputate. Sed vel metus in lacus feugiat
                  pellentesque ac sed metus. Maecenas vel posuere sem, vel
                  efficitur purus. Cras leo enim, finibus ac porttitor nec,
                  rutrum id magna. Pellentesque in lectus quam. Mauris ante
                  nunc, fringilla id mollis et, fringilla vitae risus. Praesent
                  consequat rutrum luctus. Phasellus suscipit, ligula sed
                  sodales vestibulum, quam ligula sagittis orci, nec auctor
                  sapien metus vitae risus. Nam nec sodales neque. Proin mollis
                  tempus mauris sed varius. Phasellus elementum diam in velit
                  porta pellentesque. Nullam rhoncus pulvinar efficitur. Nulla
                  eget hendrerit magna. Ut consequat et tellus sit amet
                  eleifend.
                </p>
              </div>
              <div>
                <div className="bg-orange-300 rounded p-3">Apply</div>
                <p className="p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus a posuere nibh, feugiat semper metus. Sed eu justo
                  eget massa tincidunt fermentum. Vestibulum a sollicitudin leo,
                  in tincidunt ligula. Proin vel dolor tellus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Quisque accumsan porta
                  augue ac vulputate. Sed vel metus in lacus feugiat
                  pellentesque ac sed metus. Maecenas vel posuere sem, vel
                  efficitur purus. Cras leo enim, finibus ac porttitor nec,
                  rutrum id magna. Pellentesque in lectus quam. Mauris ante
                  nunc, fringilla id mollis et, fringilla vitae risus. Praesent
                  consequat rutrum luctus. Phasellus suscipit, ligula sed
                  sodales vestibulum, quam ligula sagittis orci, nec auctor
                  sapien metus vitae risus. Nam nec sodales neque. Proin mollis
                  tempus mauris sed varius. Phasellus elementum diam in velit
                  porta pellentesque. Nullam rhoncus pulvinar efficitur. Nulla
                  eget hendrerit magna. Ut consequat et tellus sit amet
                  eleifend.
                </p>
              </div>
            </section>
          </div>
        </section>
      </section>
    </section>
  );
};
export default AdminAdmission;
