import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { useHistory, useParams } from 'react-router';
import Header from '../../Component/Header/Header';
import './Booking.css'
import car1 from '../../image/car1.png'
import bike1 from '../../image/bike1.jpg'
import bus1 from '../../image/bus1.jpg'
import train1 from '../../image/train1.jpg'
import { UserContext } from '../../App';

const Booking = () => {
    const { register, handleSubmit, errors } = useForm();
    const {type} = useParams()
    const [,,,,from,setFrom] = useContext(UserContext)
    const changFrom=(e)=>{
           const value = e.target.value 
           setFrom(value)
    }
    const [,,,,,,destination,setDestination] = useContext(UserContext)
    const changdestination=(e)=>{
        const value = e.target.value 
        setDestination(value)
 }
 console.log(destination)
    const history = useHistory()
    const onSubmit = data =>{
      history.push('/destination')
    }
    let bookingType
    if(type === 'car'){
        bookingType = <img src={car1} alt="" className="booking-img"/>
    }
    if(type === 'bus'){
        bookingType = <img src={bus1} alt="" className="booking-img"/>
    }
    if(type === 'bike'){
        bookingType = <img src={bike1} alt="" className="booking-img"/>
    }
    if(type === 'train'){
        bookingType = <img src={train1} alt="" className="booking-img"/>
    }
    return (
        <>
            <Header/><br/>
            <div className="line"></div>
            <div className="row mb-5">
                <div className="col-md-6">
                <div class="booking-form">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3 id="explore">Explore By {type}  </h3>
            <div class="input-group">
            <label for="">Pick From</label><br/>
            <input name="name" type="text" className="inp-style" onChange={changFrom}  placeholder="Place Name"  ref={register({ required: true })} /><br/>
            {errors.name && <span className="error">Name is required</span>}<br/><br/>
            </div>
            <div class="input-group">
            <label for="">Pick To</label>         
            <input name="placeName" type="text" className="inp-style" onChange={changdestination}  placeholder="Place Name" ref={register({ required: true })} /><br/>
            {errors.placeName && <span className="error">Email is required</span>}<br/><br/>
            </div>
            <div class="input-group">
                <label for="">Departure</label>
            <input name="date" type="date"  placeholder="city" ref={register({ required: true })} /><br/>
            {errors.date && <span className="error">City is required</span>}<br/><br/> 
            </div>     
            {  
            <button className="main-button" type="submit" onClick={handleSubmit}>Submit</button>
            }
            
            </form>
            </div>
            </div>

                <div className="col-md-6 mt-5">
                   {bookingType}
                </div>
            </div>
        </>
    );
};

export default Booking;