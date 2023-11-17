import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cadastrar from "./pages/cadastro/Cadastrar";
import Login from "./pages/login/Login";
import Sobre from "./pages/sobre/sobre";
import NotFound from "./pages/not-found/NotFound";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import ListaPostagens from "./components/postagens/listaPostagens/ListaPostagens";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-600">
      <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/postagens" element={<ListaPostagens />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
