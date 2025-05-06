'use client';

import React, { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in effect after the component mounts
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    window.open('https://cogs123final.wixsite.com/zing', '_blank');
  };

  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Welcome to Sean's Home Page!</h1>
      <button
        className={`btn btn-outline ${isVisible ? 'fade-in' : ''}`}
        type="button"
        onClick={handleClick}
      >
        Project Examples
      </button>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 2s ease-in;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;