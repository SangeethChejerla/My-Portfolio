"use client"
import React, { useState } from 'react';
import Confetti from 'react-confetti'; // Import Confetti component

const Fire = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti((prevState) => !prevState); // Toggle state
  };

  return (
    <div className="relative"> {/* Container with relative positioning */}
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none z-10"
      >

      </button>
      {showConfetti && (
        <Confetti
          width={600}
          height={600}
          numberOfPieces={200}
          recycle={false} // Disable confetti recycling for better performance
          gravity={0.3}
        />
      )}
    </div>
  );
};

export default Fire;
