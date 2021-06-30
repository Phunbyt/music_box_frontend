import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './NoResult.css';

export default function NoResult({ children, show, close }: Record<string, any>) {
    if (!show) return null;
    return (
      <>
        <div className="noResultModal">
          <div className="noResultOverlay" onClick={close} />
          <div className="noResultModalContent">
            <FaTimes className="noResultFaTimes" onClick={close} />
            {children}
          </div>
        </div>
      </>
    );
};
