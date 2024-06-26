import { useReducer } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import { AppProvider, ThemeProvider } from "./context";

import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Reservation from "./components/Reservation/Reservation";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";

import "./App.css";

// import { Home, BookingPage, ConfirmedBooking } from "./pages";

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route index element={<Home />} />
//       <Route path="bookings" element={<BookingPage />}>
//         <Route path="thank-you" element={<ConfirmedBooking />} />
//       </Route>
//     </Route>
//   )
// );

// const removeTime = (time, date) => {
//   const index = availableTimes.indexOf(time);
//   availableTimes.splice(index, 1);
// };

// let availableTimes = [
//   "17:00",
//   "17:30",
//   "18:00",
//   "18:30",
//   "19:00",
//   "19:30",
//   "20:00",
//   "20:30",
//   "21:00",
//   "21:30",
//   "22:00",
// ];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />}></Route>
      <Route path="reservations" element={<Reservation />} />
      <Route path="about" element={<About />} />
      <Route path="menu" element={<Menu />} />
      <Route path="profile" element={<Profile />} />
      <Route path="cart" element={<Cart />} />
      <Route path="order-online" element={<Order />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  const initialAppState = {
    previousLocation: ["/"],
  };
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "setPreviousLocation": {
        return {
          ...state,
          previousLocation: [...state.previousLocation]
            .slice(0, 1)
            .push(payload),
        };
      }

      default:
        break;
    }
  };

  const [stateGlobal, dispatchGlobal] = useReducer(reducer, initialAppState);

  return (
    <AppProvider value={{ stateGlobal, dispatchGlobal }}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
