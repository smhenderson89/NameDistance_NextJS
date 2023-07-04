'use client'; // Client component

import React, {useState, useRef, useEffect} from 'react';
import Image from 'next/image';


// Modules
import nameDistance from '@/modules/nameDistance.mjs';

// Child Components
import Results from './Results';
import KeyImage from './KeyImage';

const InputForm = () => {
    const [typedName, setTypedName] = useState('') // Update inputName
    const [nameInfo, setNameInfo] = useState(false) // Update name information from modules
    const [submitState, setSubmitState] = useState(false) // Update if user has submitted button
    const [headers, setHeaders] = useState(false)
    const [pathData, setPathData] = useState(false)
    const [keyImage, setKeyImage] = useState("qwerty")
    const [resultInfo, setResultsInfo] = useState({});
    
    const keyboardOption = (event) => {
        let keyboardSelect = event.target.value;
        setKeyImage(keyboardSelect); // update keyboard Image
    }

    const nameChange = event => {
        let partialName = event.target.value;
        setTypedName(partialName)
    }
    
    const handleSubmit = event => { 
        event.preventDefault();
        // value of input field
        // console.log('handleSubmit', typedName)
        setSubmitState(true)
    }

    /* Create headers for Results child component, pass to information 
    
    */
    function changeHeaders() {
        const headers = ['Start Letter', "End Letter", "Keyboard Path", "Distance"];
        const headersList = headers.map((item, index) => {
            return <th scope = "col" key = {index}>{item}</th>
        })

        setHeaders(headersList)
    }

    /* Filter out path information for results table, 
    set State for Results child componet */
    function pathInfo (data) { 
        let results = {"name": data[0]['name'], "keyboard": data[1]['keyboard'], "distance": data[data.length-1]['totalDistance']}
        setResultsInfo(results)
        
        // Filter out information for name path
        let pathInfo = data.slice(2, -1);
        let pathData = pathInfo.map(item => 
        <tr key = {item.id}>
            <th scope = "row">{item['start']}</th>
            <td>{item['end']}</td>
            <td>{item['arrowPath']}</td>
            <td>{item['distance']}</td>
        </tr>)
        setPathData(pathData)

    }

    useEffect(() => {
        if (submitState != '') {
        // Get JSON object for nameDistance
        let nameObject = nameDistance(typedName, 'qwerty')
        // console.log(nameObject);
        changeHeaders()
        pathInfo(nameObject)
        setNameInfo(nameObject); // update child component
        // setShow(true) 
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
            <select className = "keyboard" id = "keyboardLayout" onChange = {keyboardOption} >
                <option value = "qwerty" defaultValue>QWERTY</option>
                <option value = "ortho">ORTHOLINEAR</option>
                <option value = "dvorak">DVORAK</option>
            </select>
            <br></br>
            <br></br>
            <KeyImage image = {keyImage} />
            <br></br>
            <br></br>
            {/* Pass NameDsitance information to Results Componet */} 
            <Results 
                pathData = {pathData}
                headers = {headers}
                results = {resultInfo} 
                /> 
        </div>
    )
}

export default InputForm