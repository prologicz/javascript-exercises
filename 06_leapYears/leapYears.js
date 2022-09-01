const leapYears = function(checkYear) {

    if ((checkYear % 100 === 0 && checkYear % 400 === 0) || (checkYear % 4 === 0 && checkYear % 100 != 0)) {
        return true
    }

    else {
        return false
    }

};

// Do not edit below this line
module.exports = leapYears;
