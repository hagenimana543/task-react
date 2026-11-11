import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import Courses from "./pages/Courses";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
<Link to="/students">Students</Link> |{" "}
        <Link to="/courses">Courses</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      {/* Routes */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/students" element={<Students />} />

        <Route path="/students/:id" element={<StudentDetails />} />

        <Route path="/courses" element={<Courses />}>
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
        </Route>

        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

