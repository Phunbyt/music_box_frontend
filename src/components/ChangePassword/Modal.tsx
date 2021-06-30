import { FaTimes } from 'react-icons/fa';
import './Modal.css';
export default function PasswordModal({ children, show, close }: Record<string, any>) {
  if (!show) return null;
  return (
    <>
      <div className='modall'>
        <div className='overlayy' onClick={close} />
        <div className='modalContent'>
          {/* <FaTimes className='faTimes' onClick={close} /> */}
          {children}
        </div>
      </div>
    </>
  );
}