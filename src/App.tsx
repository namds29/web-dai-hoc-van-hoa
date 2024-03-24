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
import AdminHomepage from "./admin/homepage";
import AdminAbout from "./admin/about";
import AdminAcademics from "./admin/academics";
import AdminAdmission from "./admin/admission";
import AdminInternationalPartners from "./admin/international-partners";
import AdminNews from "./admin/news";
import AdminResearch from "./admin/research";
import AdminStudentSupport from "./admin/student-support";
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
        <Route path="/admin/about" element={<AdminAbout />} />
        <Route path="/admin/news" element={<AdminNews />} />
        <Route path="/admin/academics" element={<AdminAcademics />} />
        <Route path="/admin/admission" element={<AdminAdmission />} />
        <Route
          path="/admin/international-partners"
          element={<AdminInternationalPartners />}
        />
        <Route path="/admin/student-support" element={<AdminStudentSupport />} />
        <Route path="/admin/research" element={<AdminResearch />} />
      </Route>
    </Routes>
  );
}

export default App;
