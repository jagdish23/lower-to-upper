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
                                    <div>
                                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-10 mb-lg-9">
                                    <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li> className="dropdown-divider"</li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                                </div>
                            </div>
                            </nav>
                                    </div>
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
            <p>Readed in {0.008 * text.split(" ").length} minutes</p>
        </div>
        </>
    )
}