import  React  from 'react';
import './Spinner.css';
import SpinnerImage from '../../../apple-touch-icon-180x180.png';
const spinner = () =>(
    <div className="Backdrop" >
        <img src={SpinnerImage}  alt="ARCH17" className="SppinerImage"/>
    </div>
);
export default spinner;