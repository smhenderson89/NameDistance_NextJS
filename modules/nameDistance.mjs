/* 
LOGIC

Use sliceName.js to determine intial list of characters for names
Use Astar.js file to determine distance travaled for each letter between names
Return as an object to be used by InputForm.jsx to pass to Results.jsx to display to user

*/

// Import helper functions
import { Astar } from './Astar.mjs';
import { sliceName } from './sliceName.mjs';

function nameDistance (name, keyboard) {
    let nameArray = sliceName(name)
    if (!nameArray) {
        // console.log('not valid submitted name')
        return false
    } else {
    let totalDistance = 0;
    let distanceArray = []
    let distanceObject = [{"name" : name}, {"keyboard" : keyboard}]

    for (let i = 0; i < nameArray.length; i++) {
        let startLetter = nameArray[i][0]
        let endLetter = nameArray[i][1]
        distanceArray = Astar(startLetter, endLetter, keyboard)

        // Create Arrow Path (i.e. "A -> B -> " from path array)
        let arrowPath = "";
        let charPath = distanceArray[1]
        let pathLength = charPath.length;
        if (pathLength > 1) {
            for (let k = 0; k < pathLength; k++) {
                if (k < (pathLength -1) ) {
                arrowPath += charPath[k]
                arrowPath += "→"
                } else {
                    arrowPath += charPath[k]
                }
            }
        } else { // If starting and ending on same letter
            arrowPath = "N/A"
        }

        totalDistance += distanceArray[0]
        distanceObject.push({
            "id" : i,
            "start" : startLetter,
            "end" : endLetter,
            "distance" : distanceArray[0],
            "path" : distanceArray[1],
            "arrowPath" : arrowPath
        })
    }
    distanceObject.push({"totalDistance" : totalDistance})

    return distanceObject // return object to express route
    }
}

// Test: nameDistance('supercalifragilisticexpialidocious', 'dvorak')

export default nameDistance


