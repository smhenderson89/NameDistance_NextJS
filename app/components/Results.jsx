'use client'; // Client component

// import React from 'react'

// Results will show Name Distance information based on user input for name
function Results({pathData, headers}) {    
    if (pathData == false) { // if results have been sent
        return (<div>Pending Search</div>)
    } else {

        return (
            <div>
                <div className='container'>
                    {/* <div>Searched name: {name} </div>
                    <div>Distance traveled: {distanceTraveled} </div> */}
                    <table className = "table table-striped">
                        <thead>
                            <tr>
                               {headers}
                            </tr>
                        </thead>
                        <tbody>
                            {pathData}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
}

export default Results