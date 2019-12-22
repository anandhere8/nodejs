const increment = a => a+1;
const add = (a,b) => a+b;

const random = ()=> 1+2;

const display = (name,age) => {
    return (
        name +' and ' + age 
    );
} 

console.log(increment(2));
console.log(add(2,3));
console.log(random());
console.log(display('Anand',21));