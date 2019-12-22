const person = {
    name : 'Anand',
    age : 21,
    display ()
    {
        console.log('Hi, I am '+this.name);
    },
  //  Anand : 'Username'
};

person.display();
console.log(person.name);
// console.log(person.display());