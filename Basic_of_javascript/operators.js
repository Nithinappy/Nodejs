// There are two important operators
// 1 spread
// 2 rest

//by using spread operator
const person ={
    name: 'John',
    age: 30,
    city: {
        name: 'New York',
        population: 8000000
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);


const array = ['nithin','appy','sanjay']
// const copiedArray = [array]
const copiedArray = [...array]
console.log(copiedArray)

//by using Rest operator:

//without rest
const toArray = (args1,args2,args3)=>{
return [args1,args2,args3]
}

console.log('with rest operator:',toArray(1,2,3))
/*in the above code we can see that we are passing 3 arguments to the function
but if we add another argument then it will work but we will not get the result of added argument*/

//with rest operator
const toArray1 = (...args)=>{
    return args
}

console.log('with rest operator:',toArray1(1,2,3,4,5,6,7,8,9))