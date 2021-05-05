import React from 'react';
import Baner from '../Baner/Baner';
import Gifka from '../Gifka/Gifka';
import MainScreen from '../MainScreen/MainScreen';


const Home = () => {
    return (
        <div>
            <MainScreen/>
            <Baner/>
            <Gifka/>
        </div>
    );
};

export default Home;