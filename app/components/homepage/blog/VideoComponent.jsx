"use client"

import React, { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import ModalVideo from 'react-modal-video';

const VideoComponent = ({ videoSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsFullscreen(false);
  };

  const handleFullscreen = () => {
    setIsFullscreen(true);
    setIsModalOpen(false);
  };

  const videoClassName = isHovered ? 'h-full w-full group-hover:scale-110 transition-all duration-300' : '';

  const modalClassName = isFullscreen ? 'fixed inset-0 flex items-center justify-center z-[999]' : 'fixed inset-0 flex items-center justify-center z-[999] overflow-y-auto';

  const videoStyle = isFullscreen ? { height: '100vh', width: '100vw' } : {};

  return (
    <>
      <div
        className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg"
        onClick={handleClick}
      >
        <video
          src={videoSrc}
          height={1080}
          width={1920}
          alt=""
          onMouseOver={event => event.target.play()}
          onMouseOut={event => event.target.pause()}
          className={videoClassName}
          autoPlay={isHovered}
          loop
        />
      </div>

      
      <ModalVideo
          channel="custom"
          isOpen={isModalOpen}
          url={videoSrc}
          onClose={() => setIsModalOpen(false)}
          allowFullScreen
        />
    </>
  );
};

export default VideoComponent;