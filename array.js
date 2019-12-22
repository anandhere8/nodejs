const arr=[1,2,3,4];
for( let i of arr )
{
    console.log(i);
}


const newarr =(arr.map(i => i*10));
console.log(arr);
console.log(newarr);