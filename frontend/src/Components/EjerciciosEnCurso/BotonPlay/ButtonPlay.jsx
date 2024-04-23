import React from 'react';

const ButtonPlay = ({ onClick }) => {
  return (
    <button className="border-2 bg-color1 text-white py-2 px-4 md:py-3 md:px-6 rounded inline-flex items-center transform transition-transform hover:scale-110" style={{ borderImage: 'linear-gradient(45deg, rgba(17, 0, 207, 1), rgba(147, 8, 232, 1)) 1'}} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    </button>
  );
}

export default ButtonPlay;