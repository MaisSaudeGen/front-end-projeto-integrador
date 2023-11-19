import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cadastrar from "./pages/cadastro/Cadastrar";
import Login from "./pages/login/Login";
import Sobre from "./pages/sobre/sobre";
import NotFound from "./pages/not-found/NotFound";
import { AuthProvider } from "./contexts/authProvider";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import PageCategorias from "./pages/categorias/PageCategorias";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-secundario-3 to-principal-3">
      <AuthProvider>
        <BrowserRouter>
          <SkeletonTheme baseColor="#dddddd" highlightColor="#ffffff">
            <ToastContainer />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastrar" element={<Cadastrar />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Login />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/categorias" element={<PageCategorias />} />
            </Routes>
            <Footer />
          </SkeletonTheme>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
