import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <Link to="/">
      <img
        className="h-10 w-auto object-contain cursor-pointer"
        alt="Logo"
        src="https://s3.eu-west-1.amazonaws.com/images.feedmeonline.co.uk/logos/22790.png"
      />
    </Link>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-orange-100 shadow-md sticky top-0 z-10">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger - only on mobile */}
          <button
            className="md:hidden text-orange-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <Title />
        </div>

        {/* Nav menu - hidden on mobile unless open */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-orange-100 md:bg-transparent md:static md:flex md:items-center md:justify-end md:w-auto z-20`}
        >
          <ul className="flex flex-col md:flex-row md:gap-6 p-4 md:p-0 items-start md:items-center">
            <li className="mb-2 md:mb-0">
              <p className="text-sm">
                {isLoggedIn ? `Welcome, ${user.name}` : "Please Login"}
              </p>
            </li>
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
              { to: "/instamart", label: "Instamart" },
              { to: "/cart", label: `Cart (${cartItems.length})` },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>
                  <button
                    className="text-sm font-medium px-4 py-2 bg-orange-200 cursor-pointer rounded hover:bg-orange-300 transition w-full md:w-auto text-left"
                    onClick={() => setMenuOpen(false)} // close menu on click
                  >
                    {label}
                  </button>
                </Link>
              </li>
            ))}
            <li>
              <button
                className={`text-sm font-medium px-4 py-2 rounded w-full md:w-auto ${
                  isLoggedIn
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-green-500 text-white hover:bg-green-600"
                } transition`}
                onClick={() => {
                  setIsLoggedIn(!isLoggedIn);
                  setMenuOpen(false); // close menu on login/logout
                }}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
