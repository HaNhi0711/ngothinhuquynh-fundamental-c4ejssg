            //Bài 1:
        // let nhapThang = prompt('Nhập vào một tháng trong năm: ')
        // if(nhapThang == 1 || nhapThang == 2 || nhapThang == 3)
        // {
        //     console.log('Xuân')
        // }
        // else if(nhapThang == 4 || nhapThang == 5 || nhapThang == 6)
        // {
        //     console.log('Hạ')
        // }
        // else if(nhapThang == 7 || nhapThang == 8 ||  nhapThang == 9)
        // {
        //     console.log('Thu')
        // }
        // else {
        //     console.log('Đông')
        // }
        // var season = ['Xuân', 'Hạ', 'Thu', 'Đông']
        // var n = season.includes('Xuân')
        // console.log(n)

            //Bài 2:
        //let a = [1, 7, 11, 20, 32, 64 , 88 ,77]
        // console.log(a)
        // let check = false
        // let searchNumber = prompt('Enter a number: ')
        // for(let i=0; i<a.length; i++)
        // {
        //     if(searchNumber == a[i])
        //     {
        //         check = true
        //         console.log('Found, position= '+i)  
        //     } 
        // }
        // if(!check)
        //     console.log('Not found in our list!')

            //Bài 3:
        // let n = [12, 7, 28, 32, 10, 45]
        // {
        //     console.log(n)
        // }
        // let tong = 0
        // for(let i=0; i<n.length; i++)
        // {
        //     tong += n[i]
            
        // }
        // console.log('Sum of all number:', tong)

            //Bài 4:
        let list = prompt('Enter a list of numbers: ')
        let list_result = list.split(' ').map(function(item) {
            return parseInt(item, 10); // Hàm chuyển string thành INT
            // Return về mảng mới là list_result
        });
        console.log(list_result);
        tong = list_result.reduce((tong_val, val_hientai) => tong_val + val_hientai, 0)
        console.log('Sum of all  entered numbers:', tong)

        // let nList = prompt('ENTER A LIST OF NUMBERS: ')
        // let result = nList.split(' ')
        // console.log(result)
        // var sum = 0
        // for(let i = 0; i<result.length; i++)
        // {
        //     sum += Number(result[i])
        // }
        // console.log('Sum of all  entered numbers:', sum)

            //Bài 5:
        // let a = 1234
        // let b = 10
        // let div = 1234/10
        // console.log(Math.floor(div))
        
            //Bài 6:
        // let inNumber = prompt('Enter a number: ')
        // console.log(inNumber)
        // let count = 0
        // while(inNumber >= 10)
        // {
        //     inNumber /= 10
        //     count++   // tăng biến count lên 1
        // }
        // console.log('The number you entered numbers:', count+1)
        
            //Bài 7:
        // let a = prompt('Nhập vào a(a!=0): ')
        // console.log('a: ',a)
        // let b = prompt('Nhập vào b: ')
        // console.log('b: ',b)
        // let c = prompt('Nhập vào c: ')
        // console.log('c: ',c)
        // let x1,x2;
        // let delta = b*b - 4*a*c;
        // if(delta < 0)
        // {
        //     console.log('Phương trình vô nghiệm!')
        // }
        // else if(delta == 0)
        // { 
        //     console.log('Phương trình có nghiệm kép: ',x1=x2=(-b/(2*a)).toFixed(2))
        // }
        // else
        // {
        //     x1 = ((-b + Math.sqrt(delta)) / (2*a)).toFixed(2);
        //     x2 = (( -b - Math.sqrt(delta)) / (2*a)).toFixed(2);
        //     console.log('Phương trình có 2 nghiệm pb: '+ x1 +', ' + x2)
        // }

            
