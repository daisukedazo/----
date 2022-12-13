const myArray = ["岡田","岡島","中田","西川","南"];
const myArray2 = ["杉本","渡辺"];
const myArray3 = myArray.concat(myArray2);
console.log(myArray3);
console.log(myArray3.indexOf("中田"));
console.log(myArray3.includes("中田"));
for(const value of myArray3){
    console.log(value);
}
 
//問題
const member = ["岡田","岡島","中田","西川","南"];
const name = "中田"

const x = member.indexOf(name);
if(x==-1){
    console.log("該当者なし");
}else{
    console.log(x);
}

//問題２
let member2 = ["岡田","岡島","中田","西川","南"];

for(let i = 0 ; i < member2.length/2; i++){
    const y = member2[i];
    member2[i] = member2[member2.length - 1 - i];
    member2[member2.length - 1 - i]= y ;
}
console.log(member2);