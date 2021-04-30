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
            <h1 className="text__decor">Make It Work </h1>
            <h3>When home is your HQ, every screen moments is an opportunity <br/> for endless glamour and fun</h3>
            <div className="buttons">
            <button className="more_btn">Discover more</button>
            <button className="more__btn">Shop The Collection</button>
            </div>
         </div>
        </>
    );
};
    

export default MainScreen;