import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import '../Contents/Detail.css';

const Detail = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className='container flex body' data-aos="zoom-in-down">
      Detail
    </div>
  );
};

export default Detail;
