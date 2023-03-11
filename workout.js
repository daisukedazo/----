const a = [Math.random() * 100,Math.random() * 100,Math.random() * 100];

let total;

function sum(n){
    let x = 0;
    for(let i = 0; i<=n; i++){
        x += i;
    }
    return x
};
total= sum(a);
console.log("合計:"+ total)
