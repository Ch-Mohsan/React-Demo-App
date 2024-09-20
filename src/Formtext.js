import React, { useState } from 'react';

export default function Formtext(props) {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    setText(text.toUpperCase());
    props.showAlert("Text changed to uppercase", "success");
  };
  
  const handleLowercase = () => {
    setText(text.toLowerCase());
    props.showAlert("Text changed to lowercase", "success");
  };

  const handleRemove = () => {
    setText('');
    props.showAlert("Text removed", "success");
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text removed", "success");
    
  };

  const isTextEmpty = text.trim().length === 0;

  return (
    <>
      <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'} my-3`}>
        
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder={props.placetext}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <button
          className='btn btn-primary mx-2 my-2'
          onClick={handleUppercase}
          disabled={isTextEmpty}
        >
          To Upper Case
        </button>
        <button
          className='btn btn-primary mx-2 my-2'
          onClick={handleLowercase}
          disabled={isTextEmpty}
        >
          To Lower Case
        </button>
        <button
          className='btn btn-primary mx-2 my-2'
          onClick={handleRemove}
          disabled={isTextEmpty}
        >
          Remove
        </button>
        <button
          className='btn btn-primary mx-2 my-2'
          onClick={handleCopy}
          disabled={isTextEmpty}
        >
          Copy to Clipboard
        </button>
      </div>
      <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h2>Your text Summary</h2>
        <p>
          Number of words: {text.split(/\s+/).filter((element) => element.length !== 0).length} 
          and characters: {text.length}
        </p>
        <h2>Preview</h2>
        <p>{!isTextEmpty ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
