

const arguments = process.argv.slice(2);
const pi = 3.141592653589793;


function CalculateArea(number) 
{
    console.log("Yarıçapı ("+ number +") olan dairenin alanı: ("+ pi*Math.pow(number, 2) +")")
}

CalculateArea(arguments[0]);