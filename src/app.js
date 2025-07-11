import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import ShimmerInstamart from "./components/ShimmerInstamart";


const Aboutus = lazy(() => import("./components/Aboutus"));
const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Manikanta",
    email: "baddimanikanta15@gmail.com",
  });
  return (
    <div className="app flex flex-col min-h-screen">
      <Provider store={store}>
      <UserContext.Provider value={{ user: user }}>
        <HeaderComponent />
        <Outlet />
        <Footer />
      </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1 className="text-2xl text-slate-800 mb-4 flex justify-center mt-6">About is Loading............</h1>}>
            <Aboutus />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerInstamart/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
