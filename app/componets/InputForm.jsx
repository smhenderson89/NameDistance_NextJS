'use client'; // Client component

import React, {useState, useRef} from 'react';
import Image from 'next/image';
import qwerty from '../../public/images/qwertyKeyboard.png';
import ortho from '../../public/images/orthoKeyboard.png';
import dvorak from '../../public/images/dvorak_layout.png';

// Modules
import nameDistance from '@/modules/nameDistance.mjs';
import Results from './Results';

const InputForm = () => {
    let data = '';
    const [typedName, setTypedName] = useState('') // Update inputName
    const [nameInfo, setNameInfo] = useState('') // Update name information from modules
    const [show, setShow] = useState(false) // Show Results information

    // const [likes, setLikes] = React.useState(0);

    // const kbObject = {
    //     "qwerty" : {qwerty},
    //     "ortho" : {ortho},
    //     "dvork" : {dvorak}
    // }
    // https://www.positronx.io/react-select-dropdown-onchange-event-handler-tutorial/
    // const [imgSrc, setImgSrc] = useState({qwerty}); // Change keyboard image
    // console.log(imgSrc);

    // const onChange = (event) => {
    //     let keyboardName = event.target.value;
    //     console.log(`value: ${keyboardName}`);
    //     console.log(`src: ${kbObject[keyboardName].src}`);


    //     setImgSrc(kbObject[selectedOption])
    //     // Change image source
        
    // }

    const nameChange = event => {
        let partialName = event.target.value;
        console.log(partialName);
        setTypedName(partialName)
    }

    const handleSubmit = event => {
        event.preventDefault();
        // value of input field
        console.log('handleSubmit', typedName)
        
        // Get JSON object for nameDistance
        let nameObject = nameDistance(typedName, 'qwerty')
        console.log(nameObject);
        setNameInfo(nameObject);
        transformData(nameInfo);
    }

    function transformData(data) {
        if (data.length > 0) {
            console.log('returnResults hit');
            setShow(true)
        } else {
            setShow(false)
        }
    }

    return (
        <div>
            <label htmlFor="input name">Enter a Name</label>
            <input type = "text" id = "inputName" onChange = {nameChange}  value = {typedName}/>
            <button type = "button" onClick={handleSubmit}>Submit</button>
            <br></br>
            {/* <label htmlFor="Keyboard Layout">Choose a Keyboard</label>
            <select className = "keyboard" id = "keyboard">
                <option value = "qwerty" defaultValue>QWERTY</option>
                <option value = "ortho">ORTHOLINEAR</option>
                <option value = "dvorak">DVORAK</option>
            </select> */}
            {/* <br></br>
            <Image 
                alt = "keyboard image"
                className = "img"
                id = "keyboardImage"
                width = {500}
                height = {170}
                src = {qwerty}
            />
            <br></br> */}

            <h3>Info Here: </h3>
            {/* Pass NameDsitance information to Results Componet */} 
            <Results {...nameInfo} /> 
        </div>
    )
}

export default InputForm