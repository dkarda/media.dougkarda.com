import { useEffect, useState } from "react";
import "../styles/StarWarsWatchList.scss";

function StarWarsWatchList() {
  document.title = "DEF Star Wars Watchlist";

  const [data, setData] = useState([]);
  const dataBaseUrl =
    import.meta.env.VITE_DATA_BASE_URL + "starwars-watchlist.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataBaseUrl);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="starwarswatchlist-wrapper">
        <div className="heading">
          <h1>Star Wars Watch List</h1>
          <h3>Here's a suggested watch order to navigate the timeline</h3>
          <p>(last updated August 2024)</p>
        </div>
        <div className="star-wars-watch-list">
          {data.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StarWarsWatchList;
