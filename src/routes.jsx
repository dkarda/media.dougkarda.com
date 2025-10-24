import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from './pages/Home'
import Halloween from './pages/Halloween'
import MusicCalendar from "./pages/MusicCalendar"
import StarWarsWatchList from "./pages/StarWarsWatchList"
import ErrorBoundary from "./components/ErrorBoundary"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home />, errorElement: <ErrorBoundary />},
      { path: "halloween", element: <Halloween />, errorElement: <ErrorBoundary />},
      { path: "musiccalendar", element: <MusicCalendar />, errorElement: <ErrorBoundary />},
      { path: "starwarswatchlist", element: <StarWarsWatchList />, errorElement: <ErrorBoundary />},
      { path: "*", element: <ErrorBoundary />, errorElement: <ErrorBoundary />},
    ],
  },
]);
