import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HeaderScotiaWealth } from "./components/HeaderScotiaWealth/HeaderScotiaWealth";
import { Home } from "./pages/Home/Home";
import { ChangedDashboard } from "./pages/ChangedDashboard/ChangedDashboard";
import "./styles/partials/_global.scss";
import "rsuite/styles/index.less";
import "./styles/rsuite-custom-theme.less";
import { Chat } from "./pages/Chat/Chat";
import { ScotiaWealth } from "./pages/ScotiaWealth/ScotiaWealth";
import { AdvisorPage } from "./pages/AdvisorPage/AdvisorPage";

function App() {
  return (
    <BrowserRouter>
    <Navigation>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/changeddashboard" element={<ChangedDashboard />} />
        <Route path="/scotiawealth" element={<ScotiaWealth />} />
        <Route path="/advisor" element={<AdvisorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
