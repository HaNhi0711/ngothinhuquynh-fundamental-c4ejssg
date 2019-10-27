let list_district = ['ST', 'BĐ', 'BTL', 'CG', 'ĐĐ', 'HBT']
console.log(list_district)
let list_popu = [150300, 247100, 333300, 266800, 420900, 318000]
console.log(list_popu)

let max = 0;
let min = 5000000;
let max_index,min_index;
for(let i = 0; i<list_popu.length; i++)
{
    if(list_popu[i] > max)
    {
        max = list_popu[i];
        max_index = i;
    }
    if(list_popu[i] < min)
    {
        min = list_popu[i];
        min_index = i;
    }
}
console.log('Quận có số dân max: '+ max +' là quận '+list_district[max_index])
console.log('Quận có số dân min: '+ min +' là quận '+list_district[min_index])
let dtich_dis = [117430, 9224, 4335, 1204, 996, 1009]
console.log(dtich_dis)

let matdo_ds = [];
for(let i = 0; i<list_popu.length; i++)
{
    for(let j=0; j<dtich_dis.length; j++)
    {
        matdo_ds[i] = list_popu[i]/dtich_dis[i];
    }
    console.log(matdo_ds[i].toFixed(2))
}
let sum_dancu = 0;
for(let i =0; i<matdo_ds.length; i++)
{
    sum_dancu += matdo_ds[i];
}
let avg_matdo = sum_dancu/6;
console.log('Mật độ dân cư trung bình: ', avg_matdo.toFixed(2))
