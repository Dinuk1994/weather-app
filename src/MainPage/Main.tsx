import './Mian.css'; 
import Icon from '../assets/Photos/47314_weather_icon.png'

const Main = () => {
    return (
        <div className='container bg-image'>
            <div className='container content'>
                <img src={Icon} alt="" className='container icon'/>
                Real Weather
            </div>
        </div>
    );
};

export default Main;
