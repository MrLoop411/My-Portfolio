import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactMePage from "./pages/ContactMePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contactme" element={<ContactMePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
