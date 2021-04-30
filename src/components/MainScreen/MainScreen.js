import React from 'react';
import './MainScreen.css';
import Video from 'react-responsive-video';
import videoSrc from '../../assets/video/video.webm';
import gifka from '../../assets/video/gif.mp4';

const MainScreen = () => {
    return (
        <>
        <div>
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
        </div>
         </div>
        </div>
        <div className="gifka">
        <Video 
        className="gifka"
        mp4={gifka}
        objectFit={"cover"}
        />
     </div>
        
        </>
    );
};
    

export default MainScreen;