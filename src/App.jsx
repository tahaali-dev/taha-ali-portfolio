import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Qualification from "./Components/Qualification/Qualification";
import Qualificationpage from "./Pages/QualificationPage/qualificationpage";
import Singleport from "./Pages/Portfoliosinglepage/Singleport";
import From from "./Components/contactForm/From";
import Skills from "./Pages/skillsPage/Skills";
import ProjectPage from "./Pages/ProjectsPage/ProjectPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ------------------Imports---------------------

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/qualificationmine"
                element={<Qualificationpage />}
              />
              <Route path="/taha-skills" element={<Skills />} />
              <Route path="/taha-projects" element={<ProjectPage />} />
              <Route path="/port-single/:id" element={<Singleport />} />
              <Route path="/contact-taha" element={<From />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="bottom-center"
          autoClose={5}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <ReactQueryDevtools initialOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
