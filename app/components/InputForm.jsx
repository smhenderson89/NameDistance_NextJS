'use client'; // Client component

// React
import React, {useState, useEffect} from 'react';

// Modules
import nameDistance from '@/modules/nameDistance.mjs';

// Child Components
import Results from './Results';
import KeyImage from './KeyImage';
import ToastNotifications from './ToastNotifications';
import * as reactToastify from 'react-toastify'

const InputForm = () => {
    const [typedName, setTypedName] = useState('') // Update inputName
    const [nameInfo, setNameInfo] = useState(false) // Update name information from modules
    const [submitState, setSubmitState] = useState(false) // Update if user has submitted button
    const [headers, setHeaders] = useState(false)
    const [pathData, setPathData] = useState(false)
    const [keyImage, setKeyImage] = useState("qwerty")
    const [resultInfo, setResultsInfo] = useState({});
    
    // Update Keyboard image based on drop down selection
    const keyboardOption = (event) => {
        let keyboardSelect = event.target.value;
        setKeyImage(keyboardSelect); // update keyboard Image
        setSubmitState(true) // run A* based on inputed keyboard
    }

    // Update Type named based on when name is entered into the field
    const nameChange = event => {
        let partialName = event.target.value;
        setTypedName(partialName)
        setSubmitState(false)
    }
    
    // Update state when form is submitted
    const handleSubmit = event => { 
        event.preventDefault();
        setSubmitState(true)
    }

    /* Create headers for Results child component, pass to information to 
    Results componet */
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
        let results = {
            "name": data[0]['name'], 
            "keyboard": data[1]['keyboard'], 
            "distance": data[data.length-1]['totalDistance']}
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

    /* UseEffect -> Run program request once forum is submitted, pass information to Results component*/
    useEffect(() => {
        if (submitState != '') {
        let nameObject = nameDistance(typedName, keyImage)
        if (!nameObject) { // Logic if bad name is submitted
            reactToastify.toast.error('Name must be ≥ 2 letters', {
                position: reactToastify.toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                limit: 2
            })
        } else {
            reactToastify.toast.success('Results Updated', {
                position: reactToastify.toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                limit: 2

            })
            changeHeaders() // update headers
            pathInfo(nameObject) // update table with information
            setNameInfo(nameObject); // update child component
            setSubmitState(false) // prevent endless loop function
        }}
    }, [submitState, nameInfo, typedName, keyImage])

    return (
        <div>

            <p>What is the shortest distance between letters on a keyboard, traveling by adjacent characters?</p>
            <p>How many steps would it take to travel between all the letters in a name? Lookup a name to find out!</p>
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
            {/* Pass NameDsitance information to Results Component */} 
            <Results 
                pathData = {pathData}
                headers = {headers}
                results = {resultInfo} 
                />
            <ToastNotifications  />
        </div>
    )
}

export default InputForm