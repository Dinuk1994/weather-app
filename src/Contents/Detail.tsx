import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Contents/Detail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Detail = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

const handleSubmit = () =>{
  alert("Hello")
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='container' data-aos="zoom-in-down">
          <label className='detail' htmlFor="">
            <div className="container col-9">
              <div className="input-group mt-3 ">
                <input type="text" className="form-control rounded-5" placeholder="Enter place" aria-label="Enter place" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary bg-white rounded-5 " type="submit" id="button-addon2"><i className="bi bi-search"></i></button>
              </div>
            </div>

            <div>
              <label htmlFor="" className='text'>23 C</label>

            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Detail;
