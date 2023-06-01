import React from 'react'

const Results = (props) => {
    const headers = ['Start Letter', "End Letter", "Keyboard Path", "Distance"];
    if (props.length > 0) {
        console.log(props.length);
    } 

    
    return (
        <div>
            <h3>Results</h3>
            <div>{props.length}</div>
            <div className='container'></div>

        </div>

    )
}

export default Results