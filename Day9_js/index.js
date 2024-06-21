const student = {
  Username: "John Doe",
  age: 20,
  city: "bakalpur",
  // array of vegetables
  vegetables: ["carrot", "broccoli", "cauliflower"],
};

// destructing the object
// const { Username } = student;
// console.log(Username);
// output: John Doe

// copy se changes check kar rahe hai
const { vegetables } = student;
console.log(vegetables);
vegetables[0] = "Banana";
console.log(vegetables); // dono object and array of vegetables me change hogi
console.log(student);

// rest operator -> pack the values
const { Username, ...rest } = student;
console.log(Username); // John Doe
console.log(rest);
// output: { age: 20, city: 'bakalpur', vegetables: [ '
// 'banana', 'broccoli', 'cauliflower' ] }

// spread -> unpack the values
const newStudent = { ...student, country: "India" };
console.log(newStudent);
// output: {
//   Username: 'John Doe',
//   age: 20,
//   city: 'bakalpur',
//   vegetables: [ 'banana', 'broccoli', 'cauliflower' ],
//   country: 'India'
// }

// sum function using rest operator no default value so index starts from 1
function sum(...numbers) {
  const res = numbers.reduce((acc, ele, ind) => {
    console.log(acc, ele, ind);
    return acc + ele;
  });
  return res;
}
const res1 = sum(12, 23, 45, 34);
console.log("Sum without def", res1);

// sum function using rest and reduce using default value so index starts from 0
function sumdef(...numbers) {
  const res = numbers.reduce((acc, ele, ind) => {
    console.log(acc, ele, ind);
    return acc + ele;
  }, 2);
  return res;
}

const res2 = sumdef(12, 23, 45, 34);
console.log("Sum with def", res2);

// multiply function using rest operator
function mul(...numbers) {
  const res = numbers.reduce((acc, ele, ind) => {
    console.log(acc, ele, ind);
    return acc * ele;
  });
  return res;
}

const res3 = mul(12, 23, 45, 34);
console.log("Mul without def", res3);

// mul function using rest and reduce using default value so index starts from 0
function muldef(...numbers) {
  const res = numbers.reduce((acc, ele, ind) => {
    console.log(acc, ele, ind);
    return acc * ele;
  }, 2);
  return res;
}

const res4 = muldef(12, 23, 45, 34);
console.log("Mul with def", res4);

// destructing the array
const fruits  = ["Banana", "Apple", "Kiwi" , "Jackfruit"]
const [fruit1, fruit2, fruit3, fruit4] = fruits
console.log(fruit1, fruit2, fruit3, fruit4)

// promise using then and catch
function promiseFun(){
    const promise = fetch('https://dummyjson.com/products')
    promise.then((res)=>{
        const pr2 = res.json();
        pr2.then((data)=>{
            console.log(data);
        })
    })
}

promiseFun();

//promise using async and await
console.log("start");
async function promiseFun2() {
  console.log("inside");
  const res = await fetch("https://dummyjson.com/products");
  console.log("step1");
  const data = res.json();
  console.log(data);
}
promiseFun2();
console.log("end");

// promise using try
console.log("Promise starts using try");
async function promiseFun3() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
promiseFun3();

// map function
const num = [1, 3, 5, 6, 7, 8, 9];
function doubleNum(){
  num.map((a, b, c) => {
  console.log(a, b, c);
  console.log(a*d)
},d=4);
}

doubleNum();



