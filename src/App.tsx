import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUsLayout from "./pages/AboutUsLayout";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Features from "./pages/Features";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <div className="bg-off-white h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsLayout />}>
            <Route index element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="features" element={<Features />} />
          </Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
