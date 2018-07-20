let inputCelsius = document.querySelector('#celsius > input ');
let inputFaraheit = document.querySelector('#faranheit> input ');
let inputKelvin = document.querySelector('#kelvin > input ');

function roundNum(num)
{

    return Math.round(num*100)/100;
}

function celTransfrom(){
    let celTemp = parseFloat(inputCelsius.value);
    let faranTemp = (celTemp * (9/5)) + 32;
    let kelTemp = celTemp + 273.5;

    inputFaraheit.value = roundNum(faranTemp);
    inputKelvin.value = roundNum(kelTemp);
};
function farTransform(){
    let farTemp = parseFloat(inputFaraheit.value);
    let celTemp = (farTemp - 32 )* (5/9);
    let kelTemp = (farTemp + 469.57) * (5/9);
    inputCelsius.value = roundNum(celTemp);
    inputKelvin.value = roundNum(kelTemp);
};
function kelTransfrom(){
    let kelTemp = parseFloat(inputKelvin.value);
    let faranTemp = (9/5) * ( kelTemp - 273) +32 ;
    let celTemp = kelTemp - 273.15;
    inputCelsius.value = roundNum(celTemp);
    inputFaraheit.value = roundNum(faranTemp);
};

function main()
{
    inputCelsius.addEventListener('input', celTransfrom);
    inputFaraheit.addEventListener('input',farTransform);
    inputKelvin.addEventListener('input',kelTransfrom);
}
main();
