import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Detail/Detail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Detail = () => {
  let [location, setLocation] = useState('');
  let [temperature, setTemperature] = useState('');
  let [place, setPlace] = useState('Location')
  let [province, setProvince] = useState('Province')
  let [country, setCountry] = useState('Country')
  let [condition, setCondition] = useState('')
  let [wind, setWind] = useState('')
  let [pressure, setPressure] = useState('')
  let [humadity, setHumadity] = useState('')
  let [time, setTime] = useState('')
  let [quote, setQuote] = useState('Happiness')
  let [author,setAuthor] = useState('')

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();


    var requestOption = {
      method: 'GET'
    }

    fetch(`http://api.weatherapi.com/v1/current.json?key=de074b777d7f4469891121415240803&q=${location}`, requestOption)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setTemperature(result.current.temp_c + " °C")
        setPlace(result.location.name)
        setProvince(result.location.region)
        setCountry(result.location.country)
        setCondition(result.current.condition.icon)
        setWind(result.current.wind_kph + " Km/h")
        setPressure(result.current.pressure_mb + " Pa")
        setHumadity(result.current.humidity)
        setTime(result.location.localtime + "")
        AOS.refresh
      }
      )

    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "WKhXzDDgpPi11hARIyFfPBqVwpzPYrmUc4sBLYQJ")

    var request: {
      method: string;
      headers: Headers;
      redirect: RequestRedirect
    } = {
      method: 'GET',
      headers: myHeaders,
      redirect: "follow"
    }

    fetch(`https://api.api-ninjas.com/v1/quotes?category=happiness&apikey=WKhXzDDgpPi11hARIyFfPBqVwpzPYrmUc4sBLYQJ`, request)
      .then(response => response.json())
      .then(results => {
        console.log(results)
        setQuote(results[0].quote)
        setAuthor(results[0].author)
      })

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='' data-aos="zoom-in-down">
          <label className='detail' htmlFor="">
            <div className="container col-9">
              <div className="input-group mt-3 ">
                <input
                  type="text"
                  className="form-control rounded-5"
                  placeholder="Enter place"
                  aria-label="Enter place"
                  aria-describedby="button-addon2"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
                <button className=" btn-outline-secondary bg-white rounded-5 btn" type="submit"><i className="bi bi-search"></i></button>
              </div>
            </div>

            <div className='d-flex justify-content-evenly place'>
              <label htmlFor="">{place}</label>

            </div>
            <div className='d-flex justify-content-evenly text2'>
              <label htmlFor="">{province}</label>
            </div>
            <div className='d-flex justify-content-evenly text2'>
              <label htmlFor="">{country}</label>
            </div>


            <div className='d-flex justify-content-between'>
              <label htmlFor="" className='text' >{temperature}</label>
              <label htmlFor="" className='text'><img src={condition} alt="" /></label>
            </div>

            <div className='d-flex justify-content-between' >
              <label htmlFor="" className='text3' >
                <div className=' container d-flex'>
                  <div className='container col-8'>
                    Wind  : <label htmlFor="">{wind}</label><br />
                    Pressure  : <label htmlFor="">{pressure}</label><br />
                    Humadity  : <label htmlFor="">{humadity}</label><br />
                    Time  : <label htmlFor="">{time}</label>
                  </div>
                  <div className='container col-7 '></div>
                </div>
              </label>
            </div>
            <div className='d-flex justify-content-center '>
              <label htmlFor="" className='text4'>
                <div className='container'>
                <label htmlFor="">{quote}</label>
                <label htmlFor="">- {author} -</label>
                </div>
              </label>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Detail;
