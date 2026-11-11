import { Link } from "react-router-dom";

function Students() {
  return (
    <div>
      <h1>Students</h1>

      <ul>
        <li>
          <Link to="/students/1">John</Link>
        </li>

        <li>
          <Link to="/students/2">Mary</Link>
        </li>
      </ul>
    </div>
  );
}

export default Students;
