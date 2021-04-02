import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { vehicleType } from '../../FakeData';
import './BookingDetails.css'

const BookingDetails = () => {
    const[,,carType,setCarType] = useContext(UserContext)
    const [,,,,from,setFrom] = useContext(UserContext)
    const [,,,,,,destination,setDestination] = useContext(UserContext)

    const data = vehicleType
    const myVehicle = vehicleType.find(vehicle => 
    vehicle.type === carType
   )
   const vehicleData = myVehicle?.car
    return (
        <>
         
            <div className="details">
            <div class="inputs">
                <div class="input-group">
                    <label for="">From</label>
                    <input class="inp-style" type="text" name="" value={from}/>
                </div>
                <div class="input-group">
                    <label for="">To</label>
                    <input class="inp-style" type="text" name="" value={destination}/>
                </div>
                </div>
                </div>           
         {
          vehicleData?.map(all=>
             <div className="container">
                <div class="details-form">
                    <div className="row">
                        <div className="col-3 ">
                         <img src={all.image} alt="" className="car-img "/>   
                        </div>
                        <div className="col-2  mt-4">
                            <h6>{all.type}</h6>
                        </div>
                        <div className="col-3 mt-4">
                        <i class="fas fa-user"></i><span className="ml-3">{all.person} </span> 
                        </div>
                        <div className="col-2 mt-4">
                            <h5>${all.price}</h5>
                        </div>
                        <div className="col-2 mt-4">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                </div>
             ) 
          }
        </>
    );
};

export default BookingDetails;