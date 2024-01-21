import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu/> 

      <Routes>
        <Route path="/" element={<DefaultPage/>}>
          <Route index element={<Home/>}/>
          <Route path="about-me" element={<AboutMe/>}/>
        </Route>

        <Route path="post/:id/*" element={<Post/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
