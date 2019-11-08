function calculateSupply(currentAge, maxAge, amountPerDay)
{
    maxAge = prompt('The Maximum Age:')
    do{
        currentAge = prompt('The Current Age:')
        if(currentAge > maxAge)
        console.log('Error!')
        break;
    }while(parseInt(currentAge > maxAge))
    amountPerDay = prompt('Amount per day:')
    let restOfTheLife = ((maxAge - currentAge)*amountPerDay*365)
    console.log('You will need '+`${restOfTheLife}`+' to last you until the ripe old age of '+`${maxAge}`)
}
calculateSupply()
calculateSupply()
calculateSupply()