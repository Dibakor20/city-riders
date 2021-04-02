import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Header from '../../Component/Header/Header';
import Vehicle from '../../Component/Vehicle/Vehicle';
import './Home.css'



const Home = () => {
    
    return (
        <>
          <div className="header-background">
              <div className="container">
            <Header/>
            <Banner/>
            <Vehicle/>
          </div>
          </div>  
        </>
    );
};

export default Home;