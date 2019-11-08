
function celciusToFahrenheit(celcius)
{
    let fahrenheit = Number(prompt('Enter the Fahrenheit:'))
    celcius = ((fahrenheit - 32) / 1.8).toFixed(1)
    console.log(`${celcius}`+'°C'+' is'+` ${fahrenheit}`+'°F')
}

function fahrenheitToCelcius(fahrenheit2)
{
    let celcius2 = Number(prompt('Enter the celcius:'))
    fahrenheit2 = ((celcius2 * 1.8) + 32).toFixed(1)
    console.log(`${fahrenheit2}`+'°F'+' is'+` ${celcius2}`+'°C')
}
celciusToFahrenheit()
fahrenheitToCelcius()