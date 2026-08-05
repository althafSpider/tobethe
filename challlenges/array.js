// const arr = [1, 2, 3, 4, 5];
// // console.log(arr.splice(1,2));
// // console.log(arr.slice(1));

// arr.forEach((element,i,arr)=> {
//     console.log(element, i, arr);
    
// })

// map filter reduce

const arr1 =[5,2,4,1,15,8,3]
//!! calculate dog age in hman years

function calcdigHumanAge(age){
  const averageAge = age.map((dog)=> (
    dog <= 2 ? dog * 2 : 16 + dog * 4
  )).filter((age)=> age >= 18).reduce((acc,age) => acc + age,0)/age.length;
  return averageAge;
}

console.log(calcdigHumanAge([5,2,4,1,15,8,3]));


