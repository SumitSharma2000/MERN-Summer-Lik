// const sammer = require('./script.js')
// const res = sammer(19,10);
// console.log(res)

// const [jod,guda] = require('./script.js')
// const res = jod(19,10);
// console.log(res)

// const res2 = guda(18,5)
// console.log(res2);

// const {sum,mul} = require('./script.js') 

// const res = sum(19,10);
// console.log(res)

// const res2 = mul(18,5)
// console.log(res2);

const figlet = require('figlet')

figlet("Sumit Sharma",(err,data)=>{
    if(err) console.log("err");
    else console.log(data)
})

function calc(s, ...arr){
    let ans;
    console.log(s,arr);
    if(s == 'sum'){
        ans = arr.reduce((acc,ele)=>{
            return acc + ele
        })
    }
    else{
        ans = arr.reduce((acc,ele)=>{
            return acc*ele;
        })
    }
    return ans;
}

console.log(calc('sum',10,12,23,13));
console.log(calc('mul',10,12,23,13));

