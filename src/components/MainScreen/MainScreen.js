import React from 'react';
import './MainScreen.css';
import Video from 'react-responsive-video';
import videoSrc from '../../assets/video/video.webm';

const MainScreen = () => {
    return (
        <>
        <div className="video">
            <Video 
            className="video"
            mp4={videoSrc}
            objectFit={"cover"}
            />
        </div>
        <div className="text">
            <h1 className="text__title1">Make It Work </h1> 
            <h3 className="text__title2">When home is your HQ, every screen moments is an opportunity <br/> for endless glamour and fun</h3>
            <button className="text__btn">Shop all</button>
        </div>
        </>
    );
};
    

export default MainScreen;