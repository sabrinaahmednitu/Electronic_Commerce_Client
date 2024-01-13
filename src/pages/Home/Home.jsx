import React from 'react';
import HeroComp from '../../components/Home/Hero/Hero';
import ServicesComp from '../../components/Home/Services/Services';
import TrustedComp from '../../components/Home/Trusted/Trusted';
import FeatureComp from '../../components/Home/FeatureProducts/FetureProducts';
import Helmet from 'react-helmet';

const Home = () => {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home | Electronic web</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <HeroComp></HeroComp>
        <FeatureComp></FeatureComp>
        <ServicesComp></ServicesComp>
        <TrustedComp></TrustedComp>
      </div>
    );
};

export default Home;