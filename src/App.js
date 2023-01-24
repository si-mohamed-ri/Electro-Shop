import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style/Darck.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Phone from "./pages/Phone/Phone";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/phone" element={<Phone/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
