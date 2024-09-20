import React from 'react';

export default function Alert(props) {
  return (
    <>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"
        style={{
          position: 'fixed',
          top: '70px', 
          width: '100%', 
          zIndex: '9999', 
        }}
        >
          <strong>{`${props.alert.type}:${props.alert.message}`}</strong>
          
        </div>
      )}
    </>
  );
}
