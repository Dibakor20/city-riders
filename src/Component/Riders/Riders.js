import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Riders.css'

const Riders = (props) => {
    const {vehicle,image,type } = props.allVehicle
    const [,,carType,setCarType] = useContext(UserContext)
    const changeType =()=>{
      setCarType(type) 
    }
    return (
        <>
          <Link to={`/booking/${type}`}>  <div onClick={()=>changeType()} className="card service">
            <img src={image} alt="" className="vehicleImg p-3 d-block mx-auto"/>
            <div className="card-body">
                <h4 className="text-center ">{vehicle}</h4>
            </div>     
        </div></Link>
        </>
    );
};

export default Riders;