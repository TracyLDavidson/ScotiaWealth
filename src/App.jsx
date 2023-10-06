import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Logo } from "./components/Logo/Logo";
import { HeaderScotiaWealth } from "./components/HeaderScotiaWealth/HeaderScotiaWealth";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import "./styles/partials/_global.scss";
import "rsuite/styles/index.less";
import "./styles/rsuite-custom-theme.less";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
