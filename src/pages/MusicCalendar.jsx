import { useEffect, useState } from 'react';
import '../styles/MusicCalendar.scss'

const MusicCalendar = () => {
  document.title = "DEF Music Calendar"

  const [data, setData] = useState([]);
  const now = new Date();
  const todaysDateTime = now.toISOString();
  const dataBaseUrl = import.meta.env.VITE_MUSIC_CALDENDAR_API + todaysDateTime;

  useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await fetch(dataBaseUrl)
          const jsonData = await response.json()
          setData(jsonData.items)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      };
  
      fetchData();
    }, []);
  
  return (
      <div id="music-calendar">
          <h1>The DEF Music Calendar</h1>
          <div className="layout-container">
              {data
                  .map((item, key) => (
                    <div key={key} className={item.summary.indexOf('+')===0 ? "attending" : ""}>
                      <span className={item.summary.indexOf('cd')===0 ? "new-music" : ""}>
                        [{item.start.date}] {item.summary}
                      </span>
                    </div>
              ))}
          </div>
      </div>
  )
}

export default MusicCalendar;