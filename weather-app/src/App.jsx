import React, {useState} from 'react'
import './index.css'
import axios from 'axios'


const App = () => {
  const [data, setdata] = useState({})
  const [location, setlocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1d2381177630f4bd2bb20ddbcf9ac95b`

  const searchlocation = (ev) =>{
    if (ev.key === 'Enter'){
      axios.get(url).then((res)=>{
        setdata(res.data)
        // console.log(res.data);
      })
      setlocation('')
    }
  }

  return (
    <>
    <div className="app">
      <div className="search">
        <input value={location} onChange={ev=> setlocation(ev.target.value)} onKeyPress={searchlocation} placeholder='Enter Location' type="text" />
      </div>
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ?
          <h1>{data.main.temp.toFixed()}°K</h1>
          : null}
        </div>
        <div className="description">
          {data.weather ?
          <p>{data.weather[0].main}</p>
            : null}
        </div>
      </div>

      {data.name !== undefined &&

        <div className="bottom">
        <div className="feels">
          {data.main ?
          <p className='bold'>{data.main.feels_like.toFixed()}°K</p>
          : null}
          <p>Feels like</p>
        </div>
        <div className="humidity">
        {data.main ?
          <p className='bold'>{data.main.humidity.toFixed()}%</p>
          : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
        {data.wind ?
          <p className='bold'>{data.wind.speed.toFixed()}m/s</p>
          : null}
          <p>Wind</p>
        </div>
      </div>

      }
      </div>
    </div>
    </>
  )
}

export default App