let list = [1, 5, 20, 8, 11, 7]
let item_list = list.filter((item) => {
    return (item % 2 === 0)
})
console.log(item_list)
