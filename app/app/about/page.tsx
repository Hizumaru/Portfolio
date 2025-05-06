'use client';

import React, { useEffect, useState } from 'react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        gap: '30px',
        padding: '20px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>About Me</h1>

      {/* GIF Image */}
      <img
        src="https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif"
        alt="About GIF"
        className={isVisible ? 'fade-in' : ''}
        style={{
          width: '250px',
          height: 'auto',
          borderRadius: '12px',
        }}
      />

      <p style={{ textAlign: 'center', maxWidth: '600px' }}>
        Hey there stranger! My name is Sean. I am passionate about understanding the world around me. I plan to enroll and explore this interest through the differing fields of CogSci, Economics, Philosophy, and Psychology --- in order to shape a more holistic understanding of the society and how it functions.
      </p>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 2s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;