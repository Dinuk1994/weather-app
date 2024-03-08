import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Contents/Detail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Detail = () => {
  let[location , setLocation] = useState('');
  let[temperature , setTemperature] = useState('');

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleSubmit =(event:any)=>{
      event.preventDefault();
      var requestOption  = {
        method : 'GET'
      }

      fetch(`http://api.weatherapi.com/v1/current.json?key=de074b777d7f4469891121415240803&q=${location}`,requestOption)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setTemperature(result.current.temp_c + " °C")
      }
      
      )
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

            <div className='d-flex justify-content-between'>
              <label htmlFor="" className='text' >{temperature}</label>
              <label htmlFor="" className='text'>23 C</label>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Detail;
