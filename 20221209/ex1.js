{/* <br>

## Ex1．3つの値a, b, cのうち最小の値を出力するプログラムを作りなさい
</br> */}
// Math.floorは値の整数にする
// Math.random()は0~1のランダムな値を生成する
const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);
const c = Math.floor(Math.random() * 100);
console.log(a);        
console.log(b); 
console.log(c); 
let mini = a;
if(mini>b){
    mini=b;
} 
if(mini>c){
    mini=c;
}
// if(a> b >c){
//     console.log(a);
// }else if(b> a >c){
//     console.log(b);
// }else if(c> a >b){
//     console.log(c);
// }else if(a> c> b){
//     console.log(a);
// }else if(c> b >a){
//     console.log(c);
// }else if(b> a >c){
//     console.log(b);
// }
console.log(mini);


