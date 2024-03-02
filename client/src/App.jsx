import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"
import "./App.css"
import UploadResluts from "./pages/upload_result"
import Footer from "./component/footer"
import Header from "./component/Header"
import TextScanner from "./pages/TextScanner.jsx"

function App() {
 
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<TextScanner />} />
        <Route path="/result" element={<UploadResluts />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
