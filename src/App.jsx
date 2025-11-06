import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";

export default function App() {
  return (
    <>
      <MovieProvider>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </MovieProvider>
    </>
  );
}
