const InternationalPartners = () => {
  return (
    <section className="w-full">
      <div className="w-full h-400">
        <img
          className="w-full h-400 object-cover"
          src="/img/banner3.png"
          alt=""
        />
      </div>
      <div className="flex min-h-[100vh] gap-10">
        <section className="bg-yellow-700 w-1/3 flex flex-col p-4">
          <p className="font-bold text-2xl mb-4">Partner List</p>
          <a className="mb-4 cursor-pointer hover:opacity-80">
            🔍 Southern Luzon State University - Philipines
          </a>
          <a className="mb-4 cursor-pointer hover:opacity-80">
            🔍 Hsuan Chuang University (HCU) - Taiwan
          </a>
          <a className="mb-4 cursor-pointer hover:opacity-80">
            🔍 Chien Hsin University of Science and Technology - Taiwan
          </a>
          <a className="mb-4 cursor-pointer hover:opacity-80">
            🔍 Daejin University - Korea
          </a>
          <p className="font-bold text-2xl mb-4">Partner With Us</p>
        </section>

        <section className="text-black p-4 w-full">
          <p className="font-bold text-2xl mb-4">Partner List</p>
          <div className="grid grid-cols-2 gap-10">
            <div className=" border rounded-xl bg-gray-200 p-4 text-center ">
              <div className="h-44 w-full">
                <img
                  className="w-full h-full object-contain"
                  src="/src/assets/img/logo-partner1.png"
                  alt=""
                />
              </div>
              <p className="font-bold">
                Southern Luzon State University - Philipines
              </p>
              <p className="text-orange-600">Giới thiệu tổng quan về đối tác</p>
              <p className="text-orange-600">Thông tin hợp tác</p>
              <button className="bg-red-400 px-4 py-2 rounded text-white mt-3">Website</button>
            </div>
            <div className=" border rounded-xl bg-gray-200 p-4 text-center ">
              <div className="h-44 w-full">
                <img
                  className="w-full h-full object-contain"
                  src="/src/assets/img/logo-partner1.png"
                  alt=""
                />
              </div>
              <p className="font-bold">
                Southern Luzon State University - Philipines
              </p>
              <p className="text-orange-600">Giới thiệu tổng quan về đối tác</p>
              <p className="text-orange-600">Thông tin hợp tác</p>
              <button className="bg-red-400 px-4 py-2 rounded text-white mt-3">Website</button>
            </div>
            <div className=" border rounded-xl bg-gray-200 p-4 text-center ">
              <div className="h-44 w-full">
                <img
                  className="w-full h-full object-contain"
                  src="/src/assets/img/logo-partner1.png"
                  alt=""
                />
              </div>
              <p className="font-bold">
                Southern Luzon State University - Philipines
              </p>
              <p className="text-orange-600">Giới thiệu tổng quan về đối tác</p>
              <p className="text-orange-600">Thông tin hợp tác</p>
              <button className="bg-red-400 px-4 py-2 rounded text-white mt-3">Website</button>
            </div>
            <div className=" border rounded-xl bg-gray-200 p-4 text-center ">
              <div className="h-44 w-full">
                <img
                  className="w-full h-full object-contain"
                  src="/src/assets/img/logo-partner1.png"
                  alt=""
                />
              </div>
              <p className="font-bold">
                Southern Luzon State University - Philipines
              </p>
              <p className="text-orange-600">Giới thiệu tổng quan về đối tác</p>
              <p className="text-orange-600">Thông tin hợp tác</p>
              <button className="bg-red-400 px-4 py-2 rounded text-white mt-3">Website</button>
            </div>
           
          </div>

          <div className="font-bold text-2xl mb-4 mt-8">Partner with Us</div>
          <div>
            <p>Phone: </p>
            <p className="mt-2">Email:</p>
            <p className="mt-2">Department:</p>
          </div>
        </section>
      </div>
    </section>
  );
};
export default InternationalPartners;
