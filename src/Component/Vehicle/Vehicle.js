import React, { useState } from 'react';
import { vehicleType } from '../../FakeData';
import Riders from '../Riders/Riders';

const Vehicle = () => {
    const [riders,setRiders] = useState(vehicleType)
    return (
        <div className="container">
               <div className="row">
            {
                vehicleType.map(allVehicle=><div className="col-lg-3 col-md-6 col-sm-6"> <Riders allVehicle={allVehicle}></Riders></div>)
            }
            </div>
            </div>
    )
};

export default Vehicle;