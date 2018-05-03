/**
 * Created by aayusharora on 5/3/18.
 */

interface xyz {
    name?: string,
    price?: number,
}

// function buygoods(name: string, price: number, size?: number): xyz{
//     return
// }

// buygoods('',12);


function fruits(arg1: string, arg2?: string, ...arg3: string[]){
    console.log(arg1);
    // console.log(arg2);
    // ...arg3.forEach((i)=>{
    //     console.log(i);
    // })
}

fruits('mango', 'apple', 'lichie', 'durian','', '')