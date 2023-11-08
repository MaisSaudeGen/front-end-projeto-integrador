import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cadastrar from "./pages/cadastro/Cadastrar";



function App() {
  return (
      <div className="min-h-screen flex flex-col bg-indigo-600">
        <BrowserRouter>
        <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Cadastrar" element={<Cadastrar/>}/>   
             </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
  )
}

export default App
