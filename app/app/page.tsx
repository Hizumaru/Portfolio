'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // for App Router
// For Pages Router, use: import { useRouter } from 'next/router';


const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleExternalClick = () => {
    window.open('https://cogs123final.wixsite.com/zing', '_blank');
  };

  const handleRouteClick = () => {
    router.push('/about');
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
        gap: '40px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Welcome to Sean's Project Home Page!</h1>

      {/* External Link Button */}
      <button
        className={`btn btn-outline ${isVisible ? 'fade-in' : ''}`}
        onClick={handleExternalClick}
        style={{
          fontSize: '15px',
          padding: '10px 20px',
          borderRadius: '8px',
        }}
      >
        Dating App
      </button>

      {/* Internal Route Button */}
      <button
        className={`btn btn-outline ${isVisible ? 'fade-in' : ''}`}
        onClick={handleRouteClick}
        style={{
          fontSize: '15px',
          padding: '10px 20px',
          borderRadius: '8px',
        }}
      >
        About Page
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