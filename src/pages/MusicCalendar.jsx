import { useEffect, useState } from 'react';
import styles from '../styles/MusicCalendar.module.scss'

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
      <div id={styles.musicCalendar}>
          <h1>The DEF Music Calendar</h1>
          <div className={styles.layoutContainer}>
              {data
                  .map((item, key) => (
                    <div key={key} className={item.summary.indexOf('+')===0 ? styles.attending : ""}>
                      <span className={item.summary.indexOf('cd')===0 ? styles.newMusic : ""}>
                        [{item.start.date}] {item.summary}
                      </span>
                    </div>
              ))}
          </div>
      </div>
  )
}

export default MusicCalendar;