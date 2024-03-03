import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"
import "./App.css"
import UploadResluts from "./pages/upload_result"
import Footer from "./component/footer"
import Header from "./component/Header"
import TextScanner from "./pages/TextScanner.jsx"
import About from "./pages/about.jsx"

function App() {
 
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<TextScanner />} />
        <Route path="/result" element={<UploadResluts />} />
        <Route path="/result" element={<About />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
