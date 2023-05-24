import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Boss from '../Boss/Boss';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <Boss/>
            <PopularMenu/>
            <CallUs/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;