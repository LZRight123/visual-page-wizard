
import React from 'react';

interface QRCodeProps {
  className?: string;
}

const QRCode: React.FC<QRCodeProps> = ({ className }) => {
  return (
    <div className={`qr-code ${className || ''} animate-fade-in delay-400`}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="120" rx="6" fill="#333333" fillOpacity="0.9" />
        <g fill="#ffffff">
          {/* QR Code pattern - simplified */}
          <rect x="20" y="20" width="10" height="10" />
          <rect x="30" y="20" width="10" height="10" />
          <rect x="40" y="20" width="10" height="10" />
          <rect x="20" y="30" width="10" height="10" />
          <rect x="40" y="30" width="10" height="10" />
          <rect x="20" y="40" width="10" height="10" />
          <rect x="30" y="40" width="10" height="10" />
          <rect x="40" y="40" width="10" height="10" />
          
          <rect x="70" y="20" width="10" height="10" />
          <rect x="80" y="20" width="10" height="10" />
          <rect x="90" y="20" width="10" height="10" />
          <rect x="70" y="30" width="10" height="10" />
          <rect x="90" y="30" width="10" height="10" />
          <rect x="70" y="40" width="10" height="10" />
          <rect x="80" y="40" width="10" height="10" />
          <rect x="90" y="40" width="10" height="10" />
          
          <rect x="20" y="70" width="10" height="10" />
          <rect x="30" y="70" width="10" height="10" />
          <rect x="40" y="70" width="10" height="10" />
          <rect x="20" y="80" width="10" height="10" />
          <rect x="40" y="80" width="10" height="10" />
          <rect x="20" y="90" width="10" height="10" />
          <rect x="30" y="90" width="10" height="10" />
          <rect x="40" y="90" width="10" height="10" />
          
          <rect x="55" y="55" width="10" height="10" />
          <rect x="55" y="65" width="10" height="10" />
          <rect x="65" y="55" width="10" height="10" />
          <rect x="65" y="65" width="10" height="10" />
          
          <rect x="75" y="75" width="5" height="5" />
          <rect x="85" y="75" width="5" height="5" />
          <rect x="75" y="85" width="5" height="5" />
          <rect x="85" y="85" width="5" height="5" />
        </g>
      </svg>
    </div>
  );
};

export default QRCode;
