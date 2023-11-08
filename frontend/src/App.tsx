import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";


function App() {
 

  return (
      <main className="min-h-screen bg-indigo-900">
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home/>}/>
             </Routes>
          <Footer/>
        </BrowserRouter>
      </main>
  )
}

export default App
