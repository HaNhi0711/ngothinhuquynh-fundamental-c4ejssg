//PART 8
let Skill =
[
{
    Name: 'Tackle',
    Minimum_level: 1,
    Damage: 5,
    Hit_rate: 0.3
},
{
    Name: 'Quick attack',
    Minimum_level: 2,
    Damage: 3,
    Hit_rate: 0.5
},
{
    Name: 'Strong Kick',
    Minimum_level: 4,
    Damage: 9,
    Hit_rate: 0.2
}
]
for(let i=0; i<Skill.length; i++)
console.log(i+1, Skill[i])
for(let j=0; j<Skill.length; j++)
console.log(j+1, Skill[j].Name)
//PART 9:

let check_Skill = prompt('Chọn skill: ')
let check_bool = false;
let random = Math.random()
for(let i = 0; i<Skill.length; i++)
{
    if(check_Skill == Skill[i].Minimum_level)
    {    
        if(random < Skill[i].Hit_rate)
        {
        console.log('Damage'+': '+Skill[i].Damage)
        }
        else 
        {
            console.log('Không trúng mục tiêu!')
        }
        check_bool = true;
    }
    
}
if(!check_bool)
{
    console.log('Bạn không đủ levevl để sử dụng skill!')
}
