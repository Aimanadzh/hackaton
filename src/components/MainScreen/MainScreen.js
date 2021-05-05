import React from 'react';
import './MainScreen.css';
import Video from 'react-responsive-video';
import videoSrc from '../../assets/video/video.webm';
import { Link } from 'react-router-dom';

const MainScreen = () => {
    return (
        <>
        <Link to="/shop" style={{color: 'black'}}>
            <div className="video">
            <Video 
            className="video"
            mp4={videoSrc}
            objectFit={"cover"}
            />
            </div>
        </Link>
            
        <div className="text">
            <Link to="/shop" style={{color: 'black'}}>
                <h1 className="text__title1">Make It Work </h1> 
                <h3 className="text__title2">When home is your HQ, every screen moments is an opportunity <br/> for endless glamour and fun</h3>
            </Link>
            <Link to="/shop">
                <button className="shop">Shop</button>
            </Link>    
        </div>

        </>
    );
};

export default MainScreen;