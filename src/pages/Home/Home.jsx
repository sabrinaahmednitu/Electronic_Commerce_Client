import React from 'react';
import HeroComp from '../../components/Home/Hero/Hero';
import ServicesComp from '../../components/Home/Services/Services';
import TrustedComp from '../../components/Home/Trusted/Trusted';

const Home = () => {
    return (
        <div>
            <HeroComp></HeroComp>
           <ServicesComp></ServicesComp>
           <TrustedComp></TrustedComp>
        </div>
    );
};

export default Home;