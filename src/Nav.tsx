import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <Router>
      <main>
        <nav className="navMenu">
          <ul className="nav-link">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/contact" element={<></>} />
        </Routes>
      </main>
    </Router>
  );
}
export default Nav;
