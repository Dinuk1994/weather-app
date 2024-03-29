import React from 'react';
import '../MainPage/Main.css';

import Icon from '../assets/Photos/47314_weather_icon.png';
import Detail from '../Contents/Detail/Detail';
import News from '../Contents/News/News';

const Main = () => {
    return (
        <div className='bg-image'>
            <div className=''>
                <div className='topic'>
                    <img src={Icon} alt="" className='icon' />
                    <label htmlFor="">Real Weather</label>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <Detail />
                        </div>
                        <div className=' col-4'>
                            <Detail />
                        </div>
                        <div className='col-4'>
                            <Detail />
                        </div>
                    </div>
                </div>

                <div className=''>

                </div>
            </div>
        </div>
    );
};

export default Main;
