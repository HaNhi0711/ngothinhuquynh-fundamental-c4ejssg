// let list = [1, 5, 20, 8, 11, 7]
// let item_list = list.filter((item) => {
//     return (item % 2 === 0)
// })
// console.log(item_list)
function inChan(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr.push(arr[i])
        }
    }
    return newArr
}
// let res = inChan([2,5,7,11,8])
// console.log(res)
console.log(inChan([1,2,4,7,10,15,18,5]))