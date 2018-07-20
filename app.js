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
    console.log(celTemp.value);

    inputFaraheit.value = roundNum(faranTemp);
    inputKelvin.value = roundNum(kelTemp);
};

inputCelsius.addEventListener('input', celTransfrom);
