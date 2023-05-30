'use client'; // Client component

import React, {useState, useRef} from 'react';
import Image from 'next/image';
import qwerty from '../../public/images/qwertyKeyboard.png';
import ortho from '../../public/images/orthoKeyboard.png';
import dvorak from '../../public/images/dvorak_layout.png';

const InputForm = () => {
    // const [likes, setLikes] = React.useState(0);

    const kbObject = {
        "qwerty" : {qwerty},
        "ortho" : {ortho},
        "dvork" : {dvorak}
    }
    // https://www.positronx.io/react-select-dropdown-onchange-event-handler-tutorial/
    // const [imgSrc, setImgSrc] = useState({qwerty}); // Change keyboard image
    const [typedName, setTypedName] = useState('') // Update inputName
    // console.log(imgSrc);


    // const onChange = (event) => {
    //     let keyboardName = event.target.value;
    //     console.log(`value: ${keyboardName}`);
    //     console.log(`src: ${kbObject[keyboardName].src}`);


    //     setImgSrc(kbObject[selectedOption])
    //     // Change image source
        
    // }

    const nameChange = event => {
        setTypedName(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        // value of input field
        console.log('handleSubmit', typedName)
    }

    return (
        <div>
            <label htmlFor="input name">Enter a Name</label>
            <input type = "text" id = "inputName" onChange = {nameChange} name = "inputName" placeholder="George" value = {typedName}/>
            <button onClick={handleSubmit}>Submit</button>
            <br></br>
            {/* <label htmlFor="Keyboard Layout">Choose a Keyboard</label>
            <select className = "keyboard" id = "keyboard">
                <option value = "qwerty" defaultValue>QWERTY</option>
                <option value = "ortho">ORTHOLINEAR</option>
                <option value = "dvorak">DVORAK</option>
            </select> */}
            <br></br>
            <Image 
                alt = "keyboard image"
                className = "img"
                id = "keyboardImage"
                width = {500}
                height = {170}
                src = {qwerty}
            />
            <br></br>

        </div>
    )
}

export default InputForm