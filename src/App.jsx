import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HeaderScotiaWealth } from "./components/HeaderScotiaWealth/HeaderScotiaWealth";
import { Home } from "./pages/Home/Home";
import { ChangedDashboard } from "./pages/ChangedDashboard/ChangedDashboard";
import "./styles/partials/_global.scss";
import "rsuite/styles/index.less";
import "./styles/rsuite-custom-theme.less";
import { ScotiaWealth } from "./pages/ScotiaWealth/ScotiaWealth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/changeddashboard" element={<ChangedDashboard />} />
        <Route path="/scotiawealth" element={<ScotiaWealth />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
