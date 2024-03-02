import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import "./App.css"
import Header from "./component/Header"

function App() {
 
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
