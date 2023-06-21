'use client'; // Client component

import React, {useEffect, useState} from 'react'

// Results will show Name Distance information based on user input for name
function Results({data, showInfo}) {    
    if (!data) { // if results have been sent
        return (<div>Pending Search</div>)
    } else {
        const headers = ['Start Letter', "End Letter", "Keyboard Path", "Distance"];
        let headersList = headers.map((item, index) => {
            return <th scope = "col" key = {index}>{item}</th>
        })
        let pathInfo = data.slice(1, -1);
        console.log(pathInfo);

        console.log('result Table hit')
        let name = data[0]['name']
        return (
            <div>
                <div className='container'>
                    <div>Search for name: {name} </div>
                    <table className = "table">
                        <thead>
                            <tr>
                               {headersList}
                            </tr>
                        </thead>
                        <tbody>
                            {}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
    }

export default Results