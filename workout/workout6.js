{/* <br>

## Ex1．3つの値a, b, cのうち最小の値を出力するプログラムを作りなさい
</br> */}
// Math.floorは値の整数にする
// Math.random()は0~1のランダムな値を生成する

const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);
const c = Math.floor(Math.random() * 100);

const result = compare(a,b,c);

console.log(`aの値は: ${a}`);
console.log(`bの値は: ${b}`);
console.log(`cの値は: ${c}`);
console.log(`最小の値は: ${result}`);

function compare(a,b,c){
    let min = a;
    if(min > b){
        min = b;
    }
    if(min > c){
        min = c;
    }
    return min;
}