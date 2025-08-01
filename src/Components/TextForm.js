import { useState } from "react"
import React  from 'react'



export default function TextForm(props) {
     const [text,setText]=useState('');
     const handleUpClick = (event)=>{
    event.preventDefault();
            console.log('Uppercase button was clicked');
            let newText=text.toUpperCase();
            setText(newText)
            props.showAlert("Coverted to uppercase","success");
     }
      const handleLoClick = (event)=>{
    event.preventDefault();
            console.log('Lowercase button was clicked');
            let newText=text.toLowerCase();
            setText(newText)
            props.showAlert("Coverted to lowercase","success");
     }
     const handleCTClick = (event)=>{
    event.preventDefault();
            console.log('Clear Text button was clicked');
            let newText='';
            setText(newText)
            props.showAlert("Text Cleared","success");
     }
     const handleChange = (event)=>{
      
            console.log('change');
            setText(event.target.value)
     }
     
  return (
    <>
    <div className="container">
       
        <h1>{props.heading}</h1>
        <form>
  
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label"></label>
    <textarea className='form-control' id='my-box' value={text} onChange={handleChange} rows={8} style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"black"}}/>
  </div>
  <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
  <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
  <button className='btn btn-primary mx-1' onClick={handleCTClick}>Clear Text</button>
</form>
    </div>
    <div className="conatiner my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} word and {text.length} characters</p>
      <p>  {text.split(" ").length *(1/125)} minutes required to read this
      </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text to preview"}</p>
    </div>
    </>
  )
}
