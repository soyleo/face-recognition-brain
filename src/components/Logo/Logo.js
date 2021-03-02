
import './Logo.css';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () =>{

    return(
        <div className='logocontainer'>
            <Tilt className="Tilt tiltstyle" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img className='brain' alt='Brain Logo' src={brain} /> 
                </div>
            </Tilt>
        </div>
    )

}

export default Logo;