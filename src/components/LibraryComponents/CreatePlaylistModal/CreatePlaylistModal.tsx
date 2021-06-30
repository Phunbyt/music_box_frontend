import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './CreatePlaylistModal.css';

export default function CreatePlaylistModal({ children, show, close }: Record<string, any>) {
    if (!show) return null
    return (
      <>
        <div className="Modal">
        <div className="overlay"  onClick={close}/>
          <div className="modalContent">
                    <FaTimes className="faTimes" onClick={close} />
                    {children}
          </div>
        </div>
      </>
    );
}
