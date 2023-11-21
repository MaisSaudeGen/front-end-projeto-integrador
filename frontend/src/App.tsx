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
import PageCategoriaId from "./pages/CategoriaId";
import PagePostagens from "./pages/postagens/PagePostagens";
import { UserInfoProvider } from "./contexts/UserContex/UserContex";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-secundario-3 to-principal-3">
      <AuthProvider>
        <UserInfoProvider>
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
                <Route
                  path="/categorias/:idCategoria"
                  element={<PageCategoriaId />}
                />
                <Route path="/postagens" element={<PagePostagens />} />
              </Routes>
              <Footer />
            </SkeletonTheme>
          </BrowserRouter>
        </UserInfoProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
