function calcCicumfrence(radius)
{
    radius = Number(prompt('Enter radius:'))
    return 2 * Math.PI * radius
}

function calcArea(radius)
{
    radius = Number(prompt('Enter radius:'))
    return Math.PI * Math.pow(radius,2)
}
let resPerimeter = calcCicumfrence()
console.log('The circumference is'+` ${resPerimeter.toFixed(2)}`)
let resArea = calcArea()
console.log('The area is'+ ` ${resArea.toFixed(2)}`)