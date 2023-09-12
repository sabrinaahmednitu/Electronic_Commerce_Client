import React from 'react';
import BannerComp from '../../components/Home/Banner/Banner';
import FetureProductsComp from '../../components/Home/FeatureProducts/FetureProducts';
import HelpComp from '../../components/Home/Help/Help';

const Home = () => {
    return (
        <div>
            <BannerComp></BannerComp>
            <FetureProductsComp></FetureProductsComp>
            <HelpComp></HelpComp>
            <div>
                <h2>i am home</h2>
            </div>
        </div>
    );
};

export default Home;