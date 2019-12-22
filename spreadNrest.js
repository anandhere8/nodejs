const arr=[1,2,3,4];
arr.push(5);
const copiedarr=[...arr];

const input = (...args) =>
{
    return args;
}

console.log(arr);
console.log(copiedarr);
console.log(input(1,2,3));
