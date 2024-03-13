import "./App.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/frontPageLayout/layout";
import Homepage from "./storefront/homepage";
import About from "./storefront/about";
import News from "./storefront/news";
import Academics from "./storefront/academics";
import Research from "./storefront/research";
import InternationalPartners from "./storefront/international-partners";
import Admission from "./storefront/admission";
import StudentSupport from "./storefront/student-support";
import AdminHomepage from "./admin";
import AdminLayout from "./components/layout/adminLayout/adminLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout children={<Outlet />} />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admission" element={<Admission />} />
        <Route
          path="/international-partners"
          element={<InternationalPartners />}
        />
        <Route path="/student-support" element={<StudentSupport />} />
        <Route path="/research" element={<Research />} />
        {/* <Route path="/wallpaper" element={<Wallpapers />} /> */}
      </Route>
      <Route path="/admin" element={<AdminLayout children={<Outlet />} />}>
        <Route path="/admin" element={<AdminHomepage />} />
      </Route>
    </Routes>
  );
}

export default App;
