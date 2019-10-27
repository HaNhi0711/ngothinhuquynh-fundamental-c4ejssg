        let list = prompt('Enter a list of numbers: ')
        let list_result = list.split(',').map(function(item) {
            return parseInt(item, 10); // Hàm chuyển string thành INT
            // Return về mảng mới là list_result
        });
        console.log(list_result);
        let item_list = list_result.filter((item) => {
            return (item % 2 === 0)
        })
        console.log('All even numbers from entered list:',item_list)