//PART 1

//BÀI 1: 
let Computer =
{
    HP: 20,
    DELL: 50,
    MACBOOK: 12,
    ASUS: 30
}
//BÀI 2: Hiện ra số lương MACBOOK có trong kho
console.log('CÂU 2:')
console.log(' Số lượng MACBOOK', Computer.MACBOOK)
//BÀI 3: Lặp lại bài 2 với hãng máy tính nhập bởi người dùng
//   console.log('CÂU 3:')
// let newKey = prompt('Enter your Computer: ')
// console.log(newKey, Computer[newKey])

//PART 2

//BÀI 4: Không thay đổi kb, thêm 1 loại máy mới TOSHIBA, có sl 10 vào object
// console.log('CÂU 4:')
// Computer ['TOSHIBA'] = 10
// for(let k in Computer)
// console.log(k, Computer[k])
//BÀI 5: Lặp lại bài 4 với loại máy mới và sl nhập bởi ng dùng
// console.log('CÂU 5:')
// let newK = prompt('Enter a new computer: ')
// let newValue = Number(prompt('Enter SL:'))
// Computer[newK] = newValue
// for(let k in Computer)
// {
// console.log(k, Computer[k])
// }
//BÀI 6: UPDATE, tăng số lg DELL lên 10 cái, giảm sl MACBOOK về 2
// console.log('CÂU 6:')
// Computer.DELL = 60
// Computer.MACBOOK = 2
// console.log('Sau khi UPDATE:')
// for(let k in Computer)

// console.log(k, Computer[k])

//PART 3

//BÀI 7: In ra toàn bộ object trong bài 5, mỗi loại 1 dòng, cách nhau bởi dấu(:)
// console.log('CÂU 7:')
// const targetObject = Object.assign({}, Computer);
// for(let k in targetObject)
// console.log(k+': '+targetObject[k])
//BÀI 8: Tính tổng số máy trong kho
// console.log('CÂU 8:')
// let tong = 0;
// for(let k in targetObject)
// {
//     tong += targetObject[k]
// }
// console.log('Tổng số lượng máy là: ', tong)
//BÀI 9: Không thay đổi kbao, thêm 2 loại máy FUJITSU: 15 , ALIENWARE: 5
console.log('CÂU 9:')
Computer['FUJITSU'] = 15;
Computer['ALIENWARE'] = 5;
for (let k in Computer)
    console.log(k + ': ' + Computer[k]);
//BÀI 10: Chạy lại code bài 7 mà vẫn giữ nguyên kết quả
// console.log('CÂU 10:')
// for(let k in targetObject)
// console.log(k+ ': '+ targetObject[k]);

// //PART 4:

let PRICE_Computer = {
    HP: 600,
    DELL: 650,
    MACBOOK: 12000,
    ASUS: 400,
    ACER: 350,
    TOSHIBA: 600,
    FUJITSU: 900,
    ALIENWARE: 1000
}
console.log('Giá của 1 máy ASUS: ' + PRICE_Computer.ASUS)
let price_Comp = prompt('Enter a Computer: ')
console.log(price_Comp + ': ' + PRICE_Computer[price_Comp])

//PART 5:

let sum = PRICE_Computer.ASUS * 5;
console.log('Tổng đơn hàng của 5 máy ASUS: ', sum)
//BÀI 5:
let new_Order = prompt('Enter a new Order:')
let new_amount = Number(prompt('Enter a amount:'))
PRICE_Computer[new_amount] -= new_Order
//obj_Compute (neww_Order+': '+PRICE_Computer[new_Order])
let sum_Order = PRICE_Computer[new_Order] * new_amount
console.log('SUM: ', sum_Order)
//BÀI 6:
// Computer[new_Order] -= new_amount
// for(let k in Computer)
// console.log(k, Computer[k]);
//BÀI 7:
// console.log('Bài 7:')
// let order = prompt('Enter a Computer:')
// let amount = Number(prompt('Enter amount:'))
// Computer[order] -= amount
// for(let k in Computer)
// console.log(k, Computer[k]);

//PART 6:
let new_Object = {}
for (let k in Computer) {
    new_Object[k] = Computer[k] * PRICE_Computer[k]

}
for (let K in new_Object)
    console.log('Tổng từng giá trị:', K, new_Object[K])
console.log('Bài 9:')
let sum_All = 0
for (let i in Computer) {
    sum_All += new_Object[i]
}
console.log('Tổng tất cả giá trị trong kho: ', sum_All)



