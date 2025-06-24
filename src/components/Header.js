import { useContext, useState } from "react";
import { Link } from "react-router";
import UserContext from "./UserContext";

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
  const {user} = useContext(UserContext);
  return (
    <header className="bg-orange-100 shadow-md sticky top-0 z-10">
      <div className=" mx-auto px-6 py-4 flex items-center justify-between">
        <Title />

        <nav>
          <ul className="flex gap-6 items-center">
            <li><p>{isLoggedIn?user.name:"Please Login"}</p></li>
            <li>
              <Link to="/">
                <button className="text-sm font-medium px-4 py-2 bg-orange-200 cursor-pointer rounded hover:bg-orange-300 transition">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button className="text-sm font-medium px-4 py-2 rounded bg-orange-200 cursor-pointer hover:bg-orange-300 transition">
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="text-sm font-medium px-4 py-2 rounded bg-orange-200 cursor-pointer hover:bg-orange-300 transition">
                  Contact
                </button>
              </Link>
            </li>
            <li>
              <Link to="/instamart">
                <button className="text-sm font-medium px-4 py-2 rounded bg-orange-200 cursor-pointer hover:bg-orange-300 transition">
                  Instamart
                </button>
              </Link>
            </li>
            <li>
              <button className="text-sm font-medium px-4 py-2 rounded bg-orange-200 cursor-pointer hover:bg-orange-300 transition">
                Cart
              </button>
            </li>
            <li>
              {isLoggedIn ? (
                <button
                  className="text-sm font-medium px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="text-sm font-medium px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
