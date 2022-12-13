console.log("hello world!")

const a = 10;
const b = 20;
const c = 30;

console.log(c == a + b);

const score = 100;
if(score == 100){
    console.log("S");
}else if(score >= 80){
    console.log("A");
}else if(score >= 60){
    console.log("B");
}else if(score >= 40){
    console.log("C");
}else if(score < 40){
    console.log("F");
}

for(let n = 5 ; n <= 15 ; n+=1){
    console.log(n);
}

const n =100;
let sum = 0;
for(let i = 1; i <=n; i++){
    sum+=i;
}
console.log(sum);