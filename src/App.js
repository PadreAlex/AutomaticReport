import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./Pages/MenuPage";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";
import FifthPage from "./Pages/FifthPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/FirstPage" element={<FirstPage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/ThirdPage" element={<ThirdPage />} />
          <Route path="/FourthPage" element={<FourthPage />} />
          <Route path="/FifthPage" element={<FifthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
