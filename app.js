let iniValue = 20; //insert the initial value

// Passed the new values to the elements in HTML

document.getElementById("inputNumber").textContent = iniValue;
document.getElementById("oriMeter").textContent = iniValue;
document.getElementById("oriFeet").textContent = iniValue;
document.getElementById("oriLiter").textContent = iniValue;
document.getElementById("oriGallon").textContent = iniValue;
document.getElementById("oriKg").textContent = iniValue;
document.getElementById("oriPound").textContent = iniValue;

// Using function to calculate to convert the units.
// toFixed() converts a number to a string, rounded to a specified number of decimals

function lengthToFeet(){
    let meterToFeet = iniValue * 3.28084; //convert the units
    let roundMtf = meterToFeet.toFixed (2); //round up the number to 2 decimal
    document.getElementById("cvtMeter").textContent = roundMtf; //passed the new value to the spcified element
}
lengthToFeet(); //to call/invoke the function

function lengthToMeter(){
    let feetToMeter = iniValue * 0.3048;
    let roundFtm = feetToMeter.toFixed(2);
    document.getElementById("cvtFeet").textContent = roundFtm;
}
lengthToMeter();

function volumeToGallon(){
    let literToGallon = iniValue * 0.219969;
    let roundLtg = literToGallon.toFixed(2);
    document.getElementById("cvtLiter").textContent = roundLtg;
}
volumeToGallon();

function volumeToLiter(){
    let gallonToLiter = iniValue * 4.54609;
    let roundGtl = gallonToLiter.toFixed(2);
    document.getElementById("cvtGallon").textContent = roundGtl;    
}
volumeToLiter();

function massToPound(){
    let kgToPound = iniValue * 2.20462;
    let roundKtp = kgToPound.toFixed(2);
    document.getElementById("cvtKg").textContent = roundKtp;
}
massToPound();

function massToKg (){
    let poundToKg = iniValue * 0.453592;
    let roundPtk = poundToKg.toFixed(2);
    document.getElementById("cvtPound").textContent = roundPtk;
}
massToKg();