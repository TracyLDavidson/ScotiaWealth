import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Logo } from "./components/Logo/Logo";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import "./styles/partials/_global.scss";
import "rsuite/styles/index.less";
import "./styles/rsuite-custom-theme.less";
import { Header } from "./components/Header/Header";
import { Chat } from "./pages/Chat/Chat";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
