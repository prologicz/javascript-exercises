const removeFromArray = function(inputArray, otherArgs) {

    let inputs = Array.from(arguments);
    let finalArray = inputs[0]
    let checkArray = inputs.slice(1);
    

    for (let i = finalArray.length; i>=0; i--) {

        for (let check of checkArray) {

            if (finalArray[i] === check) {
                finalArray.splice(i, 1);

            }
        }

        
    }

    return finalArray;

};


//console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;


// Splice is causing the indexes to shift and skipping values