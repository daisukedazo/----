// ## Ex3．値がランダムに入った配列arrayのうち最小の値を出力するプログラムを作りなさい
// array = [3, 6, 2, 5]の場合2を出力

let size = 5;
let array = [];

for(let i = 0;i < size;i++){
    array.push(Math.floor(Math.random() * 100));
}
console.log(array);
let min = array[0];//
for(let i = 1 ; i < array.length; i++ ){
   if(min > array[i]){
      min = array[i];
   }                  
}
console.log(min);
