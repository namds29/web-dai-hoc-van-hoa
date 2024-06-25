import "./App.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/front-page-layout/layout";
import Research from "./storefront/research";
import InternationalPartners from "./storefront/international-partners";

import StudentSupport from "./storefront/student-support";
import AdminHomepage from "./admin/homepage";
import AdminAbout from "./admin/about";
import AdminAcademics from "./admin/academics";
import AdminAdmission from "./admin/admission";
import AdminInternationalPartners from "./admin/international-partners";
import AdminNews from "./admin/news";
import AdminResearch from "./admin/research";
import AdminStudentSupport from "./admin/student-support";
import AdminLayout from "./components/layout/admin-layout/adminLayout";
import LoginPage from "./admin/login";
import { Suspense, lazy } from "react";
import { Spin } from "antd";
import { AuthProvider } from "./utils/context/auth-context";
import FormalTraining from "./storefront/academics/formal-training";
import NewsDetailComponent from "./storefront/news/detail/news-detail";
import NewsListComponent from "./storefront/news/list/index";
import Faculties from "./storefront/faculties";
import TrainingProgramComponent from "./storefront/academics/training-program-detail";
import AdminFooter from "./admin/footer";
import Homepage from "./storefront/homepage";

const AboutComponent = lazy(() => import("./storefront/about"));
const NewsComponent = lazy(() => import("./storefront/news"));
const AcademicsComponent = lazy(() => import("./storefront/academics"));
const AdmissionComponent = lazy(() => import("./storefront/admission"));

function App() {
  return (
    <Suspense fallback={<Spin />}>
      <AuthProvider>
        <Routes>
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
            <Route
              path="/admin/student-support"
              element={<AdminStudentSupport />}
            />
            <Route path="/admin/research" element={<AdminResearch />} />
            <Route path="/admin/footer" element={<AdminFooter />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<Layout children={<Outlet />} />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/news" element={<NewsComponent />} />
            <Route path="/news/:id" element={<NewsDetailComponent />} />
            <Route path="/news-list/:name" element={<NewsListComponent />} />
            <Route path="/academics" element={<AcademicsComponent />} />
            <Route
              path="/academics/:programId"
              element={<TrainingProgramComponent />}
            />
            <Route
              path="/academics/formal-training"
              element={<FormalTraining />}
            />
            <Route path="/faculties" element={<Faculties />} />
            <Route path="/admission" element={<AdmissionComponent />} />
            <Route
              path="/international-partners"
              element={<InternationalPartners />}
            />
            <Route path="/student-support" element={<StudentSupport />} />
            <Route path="/research" element={<Research />} />
            {/* <Route path="/wallpaper" element={<Wallpapers />} /> */}
          </Route>
        </Routes>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
