import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './NoResult.css';

export default function NoResult({ children, show, close }: Record<string, any>) {
    if (!show) return null;
    return (
      <>
        <div className="noResultModal">
                <div className="noResultOverlay" onClick={close}>
                    <div className="fatimesCont">
                        <FaTimes className="noResultFaTimes" onClick={close} />
                    </div>
          </div>
          <div className="noResultModalContent">{children}</div>
        </div>
      </>
    );
};
