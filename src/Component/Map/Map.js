import React, { useContext } from 'react';
import Iframe from '@trendmicro/react-iframe';
import { UserContext } from '../../App';
const Map = () => {
    const [,,,,,,destination,setDestination] = useContext(UserContext)
    return (
        <>
           <Iframe
              src={`https://maps.google.com/maps?q=${destination},BANGLADESH&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            style={{height: '80vh', width: '100%', borderRadius: '20px'}}
        /> 
        </>
    );
};

export default Map;