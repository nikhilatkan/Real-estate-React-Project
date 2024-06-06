import { useLocation, useNavigate } from "react-router";
import "./Header.css";

function Header() {
  const location = useLocation();
  console.log(location.pathname);

  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (location.pathname === route) return true;
  }

  return (
    <div className="headerContainer">
      <header className="headerSection">
        <div>
          <img
            className="logo-image"
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="naviLinks">
            <li
              className={`navlink ${pathMatchRoute("/") && "active-link"}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`navlink ${pathMatchRoute("/offers") && "active-link"
                }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`navlink ${pathMatchRoute("/sign-in") && "active-link"
                }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
