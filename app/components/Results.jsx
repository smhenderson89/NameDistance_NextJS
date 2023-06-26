'use client'; // Client component

import React from 'react'

// Results will show Name Distance information based on user input for name
function Results({data, showInfo}) {    
    if (!data) { // if results have been sent
        return (<div>Pending Search</div>)
    } else {
        // Create table headers
        const headers = ['Start Letter', "End Letter", "Keyboard Path", "Distance"];
        const headersList = headers.map((item, index) => {
            return <th scope = "col" key = {index}>{item}</th>
        })

        // Create data information
        let pathInfo = data.slice(1, -1); // slice off first and last element of object
        // console.log(`pathInfo`);
        // console.log(pathInfo);
        
        let pathData = pathInfo.map(item => 
                <tr key = {item.id}>
                    <th scope = "row">{item['start']}</th>
                    <td>{item['end']}</td>
                    <td>{item['path']}</td>
                    <td>{item['distance']}</td>
                </tr>
        )}

        // console.log('formatted information')
        // console.log(pathData)

        // console.log('result Table hit')
        let name = data[0]['name'];

        let distanceTraveled = data[(data.length - 1)]['totalDistance'];

        return (
            <div>
                <div className='container'>
                    <div>Searched name: {name} </div>
                    <div>Distance traveled: {distanceTraveled} </div>
                    <table className = "table">
                        <thead>
                            <tr>
                               {headersList}
                            </tr>
                        </thead>
                        <tbody>
                            {/* {pathData} */}
                        </tbody>
                    </table>
                </div>
            </div>
        )}

export default Results