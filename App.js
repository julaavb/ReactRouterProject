import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/Layout"; // Dejas la importación del componente Layout
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

export default function App() {
  return (
    <div>
      <h1>Juliana's Content</h1>

      <p>
        Welcome to the stuff that i like! 
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

// Elimina la función Layout que está fuera del componente App




