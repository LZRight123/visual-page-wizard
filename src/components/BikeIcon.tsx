
import React from 'react';

interface BikeIconProps {
  className?: string;
}

const BikeIcon: React.FC<BikeIconProps> = ({ className }) => {
  return (
    <div className={`rounded-full bg-gray-200 p-4 inline-flex items-center justify-center ${className || ''}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 17C7.43594 17 9 15.4359 9 13.5C9 11.5641 7.43594 10 5.5 10C3.56406 10 2 11.5641 2 13.5C2 15.4359 3.56406 17 5.5 17ZM5.5 17C7.43594 17 9 15.4359 9 13.5C9 11.5641 7.43594 10 5.5 10C3.56406 10 2 11.5641 2 13.5C2 15.4359 3.56406 17 5.5 17ZM18.5 17C20.4359 17 22 15.4359 22 13.5C22 11.5641 20.4359 10 18.5 10C16.5641 10 15 11.5641 15 13.5C15 15.4359 16.5641 17 18.5 17Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5 5.5H16.5L14 13.5H7M9.5 8H13.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default BikeIcon;
