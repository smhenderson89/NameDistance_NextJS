'use client'; // Client component

import React, {useEffect, useState} from 'react'

// Results will show Name Distance information based on user input for name
function Results({data, showInfo}) {    
    if (!data) { // if results have been sent
        return (<div>Pending Search</div>)
    } else {
        // Create table headers
        const headers = ['Start Letter', "End Letter", "Keyboard Path", "Distance"];
        let headersList = headers.map((item, index) => {
            return <th scope = "col" key = {index}>{item}</th>
        })

        // Create data information
        let pathInfo = data.slice(1, -1); // slice off first and last element of object
        console.log(`pathInfo`);
        console.log(pathInfo);
        
        // let pathData = ''

        // for (var i in pathData) {
        //     pathData.push(
        //         <tr>
        //             <th scope = "row">{pathData[i]['start']}</th>
        //             <td>{pathInfo[i]['end']}</td>
        //             <td>{pathInfo[i]['path']}</td>
        //             <td>{pathInfo[i]['distance']}</td>
        //         </tr>
        // )}

        console.log('result Table hit')
        let name = data[0]['name'];

        let distanceTraveled = data[(data.length - 1)]['totalDistance'];

        return (
            <div>
                <div className='container'>
                    <div>Search for name: {name} </div>
                    <div>Distance traveled: {distanceTraveled} </div>
                    <table className = "table">
                        <thead>
                            <tr>
                               {headersList}
                            </tr>
                        </thead>
                        <tbody>
                            { pathInfo.forEach(item => 
                            <tr>
                                <th scope="row">1</th>
                                <td>1st</td>
                                <td>2nd</td>
                                <td>3rd</td>
                            </tr>
                          )}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
    }

export default Results