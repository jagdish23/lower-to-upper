import React, {useState} from 'react'



export  function Textfrom(props){

    

    const handleUpclick=()=>{
        console.log("UpperCase was clicked" + text);
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleLoclick=()=>{
        console.log("UpperCase was clicked" + text);
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const handleOnChange=(event)=>{
        console.log('on change');
        setText(event.target.value);
    }

    const [text,setText]=useState('Enter text here')
    return(
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpclick}>Convert to uppercase</button>
            <button className='btn btn-info' onClick={handleLoclick}>Convert to Lowercase</button>
        </div>

        <div className='container' my-2>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>readed in {0.008 * text.split(" ").length} minutes</p>
        </div>
        </>
    )
}