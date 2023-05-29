'use client'; // Client component

import React from 'react';
import Image from 'next/image';
import qwerty from '../../public/images/qwertyKeyboard.png';
import ortho from '../../public/images/orthoKeyboard.png';
import dvorak from '../../public/images/dvorak_layout.png';

const InputForm = () => {
    // const [likes, setLikes] = React.useState(0);

    // https://www.positronx.io/react-select-dropdown-onchange-event-handler-tutorial/
    const [imgSrc, setImgSrc] = React.useState("qwerty");
    const onChange = (event) => {
        console.log('change happened');
        console.log(event.target.value)
        // setImgSrc(value);
        // console.log(setImgSrc.value);
    }


    function handleSubmit() {
        console.log("button clicked!")
    }

    return (
        <div>
            <form className = "searchBar" select onChange={onChange}>
                <label for="input name">Enter a Name</label>
                <input type = "text" id = "inputName" name = "inputName" placeholder="George"  />
                <br></br>
                <label for="Keyboard Layout">Choose a Keyboard</label>
                <select class = "keyboard" name = "keyboard" id = "keyboard">
                    <option value = "qwerty" selected>QWERTY</option>
                    <option value = "ortho">ORTHOLINEAR</option>
                    <option value = "dvorak">DVORAK</option>
                </select>
            </form>
            <Image 
                alt = "keyboard image"
                class = "img"
                id = "keyboardImage"
                width = {500}
                height = {170}
                src = {qwerty}
            />
            <br></br>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default InputForm