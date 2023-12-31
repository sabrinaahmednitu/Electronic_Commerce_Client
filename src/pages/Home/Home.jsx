import React from 'react';
import HeroComp from '../../components/Home/Hero/Hero';
import ServicesComp from '../../components/Home/Services/Services';
import TrustedComp from '../../components/Home/Trusted/Trusted';
import FeatureComp from '../../components/Home/FeatureProducts/FetureProducts';

const Home = () => {
    return (
      <div>
        <HeroComp></HeroComp>
        <FeatureComp></FeatureComp>
        <ServicesComp></ServicesComp>
        <TrustedComp></TrustedComp>
      </div>
    );
};

export default Home;