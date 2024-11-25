import React, {useState} from 'react'



export  function Textfrom(props){

    const a="jagdish";

    const handleUpclick=()=>{
        console.log("UpperCase was clicked" + text);
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange=(event)=>{
        console.log('on change');
        setText(event.target.value)
    }

    const [text,setText]=useState('Enter text here')
    return(
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpclick}>Convert to uppercase</button>
        </div>
    )
}