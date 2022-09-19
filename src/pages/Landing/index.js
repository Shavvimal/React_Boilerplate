import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { Header, Title, Timeline, FeaturesBlocksShort, Testimonials, ContactHome, Footer, Description } from '../../layout';


const Landing = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/* Headers */}
            <Header/>
            <main className="flex-grow">
            {/* Landing Content */}
            <Title/>
            <Description/>
            {/* <FeaturesBlocks/> */}
            {/* <Timeline /> */}
            <FeaturesBlocksShort />
            <Testimonials />
            <ContactHome />
            <Footer/>
            </main>
        </div>
    )
}

export default Landing;
