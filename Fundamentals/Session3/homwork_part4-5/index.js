let numberList=[22, 56, 43, 89, 34,52]
console.log('High scores: ')
for(let i=0; i<numberList.length;i++){
    console.log(`${i+1}.  ${numberList[i]}`)
}


let newScore = Number(prompt('Enter your new score: '))
numberList.push(newScore)
console.log('Thêm vào mảng:')
for(let i=0; i<numberList.length;i++){
    console.log(`${i+1}.  ${numberList[i]}`)
}

    //Part 5
console.log('SX mảng giảm dần:')
    numberList.sort(function(a, b){return b - a});
for(let i=0; i<numberList.length;i++){
    
    console.log(`${i+1}.  ${numberList[i]}`)
}
console.log('Thêm ptu vào mảng và sx DeSC: ')
newScore = Number(prompt('Enter your new score: '))
numberList.push(newScore)
numberList.sort(function(a, b){return b - a});
for(let i=0; i<numberList.length;i++){
    
    console.log(`${i+1}.  ${numberList[i]}`)
}
numberList.sort(function(a, b){return b - a});

console.log('New high scores:')
for(let i =0; i<5; i++)
{
    console.log(`${i+1}.  ${numberList[i]}`)
}