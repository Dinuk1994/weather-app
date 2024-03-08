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

  return (
    <div>
      <div className='container' data-aos="zoom-in-down">
        <label className='detail' htmlFor="">
          <div className="input-container">
            <div>
              <div className="input-group mt-3">
                <input type="text" className="form-control rounded-5" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <button className="btn btn-outline-secondary bg-white rounded-5 " type="button" id="button-addon2"><i className="bi bi-search"></i></button>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Detail;
