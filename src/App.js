import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/ErrorPage";
import Discover from "./pages/Discover/Discover";
import About from "./pages/About/About";
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
