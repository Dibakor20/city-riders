import React from 'react';
import BookingDetails from '../../Component/BookingDetails/BookingDetails';
import Header from '../../Component/Header/Header';
import Map from '../../Component/Map/Map';

const Destination = () => {
    return (
        <>
        <Header/>
        <div className="container">
         <div className="row">
             <div className="col-md-6">
                <BookingDetails/>
             </div>
             <div className="col-md-6 mt-5">
                <Map/>
             </div>
         </div>
         </div>   
        </>
    );
};

export default Destination;