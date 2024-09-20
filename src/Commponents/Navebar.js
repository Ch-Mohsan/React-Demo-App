import React from 'react';

export default function Navebar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container">
          <span className="navbar-brand mb-0 h1">{props.tittle}</span>
          <a className={`nave-link mx-4 text-${props.mode==='light'?'dark':'light'}`} href="/">{props.homeText}</a>
          <a className={`nave-link mx-4 text-${props.mode==='light'?'dark':'light'}`} href="/">{props.aboutText}</a>

          
          <div className="form-check form-switch ms-auto">
          <input 
  className="form-check-input" 
  type="checkbox" 
  id="flexSwitchCheckDefault" 
  onChange={props.showMode}    
  defaultChecked={props.mode === 'dark'}
/>

            <label 
              className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} 
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
