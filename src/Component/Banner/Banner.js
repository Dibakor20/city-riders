import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
          <div className="banner">
              <h1 className="banner-title">Find Next Place To Visit</h1>
              <p className="banner-description">Discover amzaing rides at exclusive deals</p>
          </div>
          
            <div className=" ">
            <form class="form-inline">
                <input class="form-control search-box d-block mx-auto " type="search" placeholder="&#xF002; Search Your Destination..." aria-label="Search"/>
            </form>
            </div>
        </>
    );
};

export default Banner;