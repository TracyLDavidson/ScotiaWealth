import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HeaderScotiaWealth } from "./components/HeaderScotiaWealth/HeaderScotiaWealth";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import "./styles/partials/_global.scss";
import "rsuite/styles/index.less";
import "./styles/rsuite-custom-theme.less";
import { Chat } from "./pages/Chat/Chat";
import { ChatOptions } from "./pages/ChatOptions/ChatOptions";
import { ScotiaWealth } from "./pages/ScotiaWealth/ScotiaWealth";
import { AdvisorPage } from "./pages/AdvisorPage/AdvisorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/scotiawealth" element={<ScotiaWealth />} />
        <Route path="/advisor" element={<AdvisorPage />} />
        <Route path="/chat-options" element={<ChatOptions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
