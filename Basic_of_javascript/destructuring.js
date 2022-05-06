const person ={
    name: 'John',
    age: 30,
    city: {
        name: 'New York',
        population: 8000000
    }
};

//without destructuring
const printPerson= (person)=>{
    console.log('without destructring',person.name);
}

printPerson(person);

//with destructuring

const printPerson_destructring= ({name,age})=>{
    console.log('with destructring',name,age);
}

printPerson_destructring(person);
//another way of destructuring
const {name,age} = person;
console.log('another way of destructuring',name,age);

//with arrays
console.log('*********with arrays**********')

const array = ['nithin','appy','sanjay']
const [n,a,s] = array;
console.log(n,a,s);