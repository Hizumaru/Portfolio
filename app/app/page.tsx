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
  const handleClick2 = () => {
    window.open('https://drive.google.com/file/d/1Qhdb0ElGZM6EERfdosI--ymr1W14lAk_/view', '_blank'); // Open a new website
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
        gap: '40px', // Increase the gap between buttons here
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Welcome to Sean's Home Page!</h1>
      <button
        className={`btn btn-outline ${isVisible ? 'fade-in' : ''}`}
        type="button"
        onClick={handleClick}
        style={{
          fontSize: '15px', // Larger text
          padding: '10px 20px', // Bigger button size (vertical and horizontal padding)
          borderRadius: '8px', // Optional: Adds rounded corners
        }}
      >
        Dating App
      </button>

      <button
        className={`btn btn-outline ${isVisible ? 'fade-in' : ''}`}
        type="button"
        onClick={handleClick2}
        style={{
          fontSize: '15px', // Larger text
          padding: '10px 20px', // Bigger button size (vertical and horizontal padding)
          borderRadius: '8px', // Optional: Adds rounded corners
        }}
      >
        My Resume
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