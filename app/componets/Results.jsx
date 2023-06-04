'use client'; // Client component

import React, {useEffect, useState} from 'react'

const Results = (data) => {


    const headers = ['Start Letter', "End Letter", "Keyboard Path", "Distance"];

    function ResultsTable({data}) {

        if (!data) { // if results have been sent
            return (<div>Pending Search</div>)
            // let name = data[0]["name"];
        } else {
            console.log('result Table hit')
            return (
                <div>
                    <div>Website thinks it has state: </div>
                    <div className='container'>
                    </div>
            </div>
            )

        }
    }

    return (
        <div>
            <h3>Results</h3>
            <ResultsTable data = {props} />
        </div>

    )
}

export default Results