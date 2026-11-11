import { Link, Outlet } from "react-router-dom";

function Courses() {
  return (
    <div>
      <h1>Courses</h1>

      <nav>
        <Link to="frontend">Frontend</Link> |
        <Link to="backend">Backend</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Courses;
