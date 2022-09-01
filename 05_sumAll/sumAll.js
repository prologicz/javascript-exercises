const sumAll = function(num1, num2) {

    finalResult = 0;
    startNum = Math.min(num1,num2);
    endNum = Math.max(num1,num2);

    if (num1 <0 || num2 <0 || typeof(num1) != 'number' || typeof(num2) != 'number') {

        return "ERROR"
    }

    else {
        for ( i = startNum; i <= endNum; i++) {

            finalResult+= i;
        }

        return finalResult;
    }
};

// Do not edit below this line
module.exports = sumAll;
