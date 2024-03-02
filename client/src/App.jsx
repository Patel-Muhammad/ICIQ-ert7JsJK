import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import "./App.css"
import UploadResluts from "./pages/upload_result"
import Footer from "./component/footer"

function App() {
 
  return (
    <div className="app">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<UploadResluts />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
