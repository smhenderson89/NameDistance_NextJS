'use client'; // Client component

// import React from 'react'

// Results will show Name Distance information based on user input for name
function Results({pathData, headers, results}) {
    if (pathData == false) { // if results have been sent
        return (<div>Awaiting Search</div>)
    } else {   
        return (
            <div>
                <div className='container'>
                    <div>Name Searched: {results.name}</div>
                    <div>Keyboard Used: {results.keyboard} </div>
                    <table className = "table table-striped">
                        <thead>
                            <tr>
                               {headers}
                            </tr>
                        </thead>
                        <tbody>
                            {pathData}
                            <tr>
                                <th scope = "row"></th>
                                <td colSpan= "2" id = "totalDistanceID">Total Distance</td>
                                <td>{results.distance}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )}
}

export default Results