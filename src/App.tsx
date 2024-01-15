import "./App.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Homepage from "./storefront/homepage";
import About from "./storefront/about";
function App() {
  return (
    <Routes>
  
      <Route path="/" element={<Layout children={<Outlet />} />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/wallpaper" element={<Wallpapers />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
