import React, { useState, useRef } from 'react';
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
const VideoPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className=' tw-relative'>
            <video ref={videoRef} src={src} style={{ width: '100%',borderRadius:'12px'}} />
            <div className=' tw-bg-[rgb(0,0,0,0.1)] tw-h-full tw-w-full tw-flex tw-justify-center tw-items-center tw-absolute tw-top-0'>
            <button className='  tw-flex tw-justify-center tw-items-center  tw-w-20 tw-h-20   border tw-rounded-full tw-border-white' onClick={togglePlay} style={{ fontSize: '24px' }}>
                {isPlaying ?<IoMdPause size={35} className=' tw-text-white' />:<FaPlay   size={30} className=' tw-text-white' />}
            </button>
            </div>
        </div>
    );
};

export default VideoPlayer;
