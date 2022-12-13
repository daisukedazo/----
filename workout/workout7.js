{/* <br>

## Ex1．3つの値a, b, cのうち最小の値を出力するプログラムを作りなさい
</br> */}

const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);
const c = Math.floor(Math.random() * 100);
// a,b,cの乱数を定数で指定（100以下）
const result = compare(a,b,c);


console.log(`aの値は: ${a}`);
console.log(`bの値は: ${b}`);
console.log(`cの値は: ${c}`);
console.log(`最小の値は: ${result}`);
// 答えを出力

// 関数を指定
function compare(a,b,c){
    let min =a;
    // 初期値でaが一番小さいと仮定
    if(min>b){
        min=b;
        // 最小値のaとbを比較し、aより小さければminを入れ替える
    }
    if(min>c){
        min = c;
        // bと比較し入れ替える
    }
    return min;
    // let minへ戻す
}
