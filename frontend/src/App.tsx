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

import 'react-toastify/dist/ReactToastify.css';
import ListaCategorias from "./components/categorias/cardCategorias/listaCategorias/ListaCategorias";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-red-600">
      <AuthProvider>
      <BrowserRouter>
      <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/categorias" element={<ListaCategorias />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
