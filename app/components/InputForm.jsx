'use client'; // Client component

import React, {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import qwerty from '../../public/images/qwertyKeyboard.png';
import ortho from '../../public/images/orthoKeyboard.png';
import dvorak from '../../public/images/dvorak_layout.png';

// Modules
import nameDistance from '@/modules/nameDistance.mjs';
import Results from './Results';

const InputForm = () => {
    const [typedName, setTypedName] = useState('') // Update inputName
    const [nameInfo, setNameInfo] = useState(false) // Update name information from modules
    const [submitState, setSubmitState] = useState(false) // Update if user has submitted button
    const [show, setShow] = useState(false) // Show results from search 
    const [headers, setHeaders] = useState(false)
    const [pathData, setPathData] = useState(false)

    // const [show, setShow] = useState(false) // Show Results information

    // const [likes, setLikes] = React.useState(0);

    // const kbObject = {
    //     "qwerty" : {qwerty},
    //     "ortho" : {ortho},
    //     "dvork" : {dvorak}
    // }
    // https://www.positronx.io/react-select-dropdown-onchange-event-handler-tutorial/
    // const [imgSrc, setImgSrc] = useState({qwerty}); // Change keyboard image
    // console.log(imgSrc);

    /* Detect changes for dropdown menu */
    const onChange = (event) => {
        let keyboardName = event.target.value;
        console.log(`value: ${keyboardName}`);
        console.log(`src: ${kbObject[keyboardName].src}`);
    }


    //     setImgSrc(kbObject[selectedOption])
    //     // Change image source
        
    // }

    const nameChange = event => {
        let partialName = event.target.value;
        // console.log(partialName);
        setTypedName(partialName)
    }
    
    const handleSubmit = event => { 
        event.preventDefault();
        // value of input field
        console.log('handleSubmit', typedName)
        setSubmitState(true)
    }

    function changeHeaders() {
        const headers = ['Start Letter', "End Letter", "Keyboard Path", "Distance"];
        const headersList = headers.map((item, index) => {
            return <th scope = "col" key = {index}>{item}</th>
        })
        console.log('change headers hit');
        setHeaders(headersList)
    }

    function pathInfo (data) { // pre-sort name information
        let pathInfo = data.slice(1, -1);
        let pathData = pathInfo.map(item => 
        <tr key = {item.id}>
            <th scope = "row">{item['start']}</th>
            <td>{item['end']}</td>
            <td>{item['arrowPath']}</td>
            <td>{item['distance']}</td>
        </tr>)
        console.log('path Data function hit')
        setPathData(pathData)
    }

    useEffect(() => {
        if (submitState != '') {
        // Get JSON object for nameDistance
        let nameObject = nameDistance(typedName, 'qwerty')
        console.log(nameObject);
        changeHeaders()
        pathInfo(nameObject)
        setNameInfo(nameObject); // update child component
        setShow(true) 
        setSubmitState(false) // prevent endless loop function
        }
    }, [submitState, nameInfo, typedName])

    return (
        <div>
            <label htmlFor="input name">Enter a Name</label>
            <input type = "text" id = "inputName" onChange = {nameChange}  value = {typedName}/>
            <button type = "button" onClick={handleSubmit}>Submit</button>
            <br></br>
            <label htmlFor="Keyboard Layout">Choose a Keyboard</label>
            <select className = "keyboard" id = "keyboard">
                <option value = "qwerty" defaultValue>QWERTY</option>
                <option value = "ortho">ORTHOLINEAR</option>
                <option value = "dvorak">DVORAK</option>
            </select>
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
            <br></br>
            <h5>Info Here: </h5>
            {/* Pass NameDsitance information to Results Componet */} 
            <Results 
                pathData = {pathData}
                headers = {headers} 
                showInfo = {show} /> 
        </div>
    )
}

export default InputForm