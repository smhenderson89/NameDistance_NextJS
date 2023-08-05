/* sliceName.js 
Purpose: Take a name, split it up into list of start and end letters for Astar program
*/

export function sliceName(input) {

    // Check if names are fully alpha characters and not numbers/symbols
    // Only look for paths between where the start and end are leters
    let name = input.toUpperCase();
    let x = name.length;
    let letterArray = []
    if (x == 0) {
        // console.log('error name input');
        return false
    } else if (x == 1) {
        // console.log('single letter name');
        return false
    } else if (x > 1) {
        for (let i = 0; i < (x - 1); i++) {
            // Use Regular expression to check start and end letter if both are characters
            if (/^[a-zA-Z]+$/.test(name[i]) && (/^[a-zA-Z]+$/.test(name[i+1]))) {
                // console.log(`${name[i]} & ${name[i+1]} are characters`)
                letterArray.push([name[i], name[i+1]])
            } else { // if not valid letter for start and finish
                // letterArray[i] = [null, null]
            }
        }
    } else {
        console.log("Error Code #002 - Negative Name Length");
    }
    // console.log(JSON.stringify(letterArray));
    return letterArray
}

/* Example Use

let test = "johnathan"; 
sliceName(test)

// exports.sliceName = sliceName;

*/