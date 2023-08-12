import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Qualification from "./Components/Qualification/Qualification";
import Qualificationpage from "./Pages/QualificationPage/qualificationpage";

// ------------------Imports---------------------

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/qualificationmine" element={<Qualificationpage />} />
          </Route>
        
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
