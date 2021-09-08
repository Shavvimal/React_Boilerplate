import React, { useEffect, useRef } from 'react';
import './styleHome.css'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <p>Home sweet home</p>
            <p>{process.env.REACT_APP_GOOGLE_MAPS_API_KEY}</p>
        </>
    )
}

export default Home;
