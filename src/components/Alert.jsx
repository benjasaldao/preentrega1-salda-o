import React from 'react';

const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }

  return (
    <>
      {alert?.active && (
        <div className={alert.type === 'success' ? 'bg-secondary p-5 w-full rounded mb-8' : 'bg-red p-5 w-full rounded mb-8'}>
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">{alert.message}</div>
            <button type="button">
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
