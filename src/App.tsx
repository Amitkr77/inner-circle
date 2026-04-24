import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Sections";
import MonolithRetreat from "./pages/MonolithRetreat";
import ExperienceDetails from "./pages/ExperienceDetails";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Explore from "./pages/Explore";
import Resources from "./pages/Resources";
import Success from "./pages/Success";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<MonolithRetreat />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/experiences/:id" element={<ExperienceDetails />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
}
