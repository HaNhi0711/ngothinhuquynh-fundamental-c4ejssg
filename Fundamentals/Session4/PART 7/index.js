//PART 7
let obj_Adventure =
{
    Name: 'Light',
    Age: 17,
    Strength: 8,
    Defense: 10,
    HP: 100,
    Backpack: ['Shield', ' Bread Loaf'],
    Gold: 100,
    Level: 2
}
obj_Adventure.Gold = 50
for (let k in obj_Adventure)
    console.log(k, obj_Adventure[k])
obj_Adventure.Backpack += ', FlintStone'
for (let k in obj_Adventure)
    console.log(k, obj_Adventure[k])
obj_Adventure['Pocket'] = ['Monster', 'Flashlight']
for (let k in obj_Adventure)
    console.log(k, obj_Adventure[k])
