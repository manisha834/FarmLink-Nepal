import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
    <div
        style={{
            width:45,
            height:45,
            borderRadius:"50%",
            background:"#F9A826",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            fontSize:24
        }}
    >
        🌾
    </div>

    <div className="ms-2">

        <h5 className="m-0 fw-bold">
            FarmLink Nepal
        </h5>

        <small className="text-light">
            Farm to Future
        </small>

    </div>

 </Link>



        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>

          <ul className="navbar-nav mx-auto">

  <li className="nav-item">
    <NavLink className="nav-link" to="/">
      Home
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/products">
      Marketplace
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/farmers">
      Farmers
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/contact">
      Contact
    </NavLink>
  </li>

</ul>

          <div className="d-flex">

            <button className="btn btn-outline-light me-2">
              Login
            </button>

            <button className="btn btn-warning">
              Sign Up
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;