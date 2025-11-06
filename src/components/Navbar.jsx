import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <Link to="/" className="site-title">
          Home
        </Link>
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <CustomLink to="/topmovies">
            <img
              src="https://assets.dougkarda.com/images/icons/icon-movielist-trans.png"
              alt="Top Movies icon"
            />
            <span>Top Movies</span>
          </CustomLink>
          <CustomLink to="/movieproject">
            <img
              src="https://assets.dougkarda.com/images/icons/icon-movie-trans.png"
              alt="Movies icon"
            />
            <span>Movie Proj</span>
          </CustomLink>
          <CustomLink to="/moviefavorites">
            <img
              src="https://assets.dougkarda.com/images/icons/icon-movie-trans.png"
              alt="Movies icon"
            />
            <div>Faves</div>
          </CustomLink>
          <CustomLink to="/halloween">
            <img
              src="https://assets.dougkarda.com/images/icons/icon-pumpkin-trans.png"
              alt="Halloween Pumpkin icon"
            />
            <span>Halloween Pumpkins</span>
          </CustomLink>
          {/* <CustomLink to="/movies">
                        <img src="https://assets.dougkarda.com/images/icons/icon-movie-trans.png"
                            alt="Movies icon" />
                        <span>Movies</span>
                    </CustomLink> */}
          {/* <CustomLink to="/tv">
                        <img src="https://assets.dougkarda.com/images/icons/icon-tv-trans.png"
                            alt="TV icon" />
                        <span>Television</span>
                    </CustomLink> */}
          {/* <CustomLink to="/concerthistory">
                        <img src="https://assets.dougkarda.com/images/icons/icon-concerthistory-trans.png"
                            alt="Concert History icon" />
                        <span>Concert History</span>
                    </CustomLink> */}
          <CustomLink to="/starwarswatchlist">
            <img
              src="https://assets.dougkarda.com/images/icons/icon-starwars-trans.png"
              alt="Star Wars icon"
            />
            <span>Star Wars Watch List</span>
          </CustomLink>
          {/* <CustomLink to="/weather">
                        <img src="https://assets.dougkarda.com/images/icons/icon-weather-trans.png"
                            alt="Weather icon" />
                        <span>Weather</span>
                    </CustomLink> */}
          {/* <CustomLink to="/photogallery">
                        <img src="https://assets.dougkarda.com/images/icons/icon-camera-trans.jpg"
                            alt="Camera icon" />
                        <span></span>
                    </CustomLink> */}
          <CustomLink to="/MusicCalendar">
            <img
              src="https://assets.dougkarda.com/images/icons/icon-concerts-trans.png"
              alt="Music Calendar icon"
            />
            <span>Music Calendar</span>
          </CustomLink>
          {/* <CustomLink to="/musicians">
                        <img src="https://assets.dougkarda.com/images/icons/icon-musicians-trans.png"
                            alt="Musicians icon" />
                        <span>Musicians</span>
                    </CustomLink>
                    <CustomLink to="/todo">
                        <img src="https://assets.dougkarda.com/images/icons/icon-todo-trans.png"
                            alt="Todo list icon" />
                        <span>To Do List</span>
                    </CustomLink> */}
        </ul>
      </nav>
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
