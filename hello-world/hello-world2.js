/*配列
//length⇨どんだけのデータが入っているか。データの大きさを表す。
　console.log(myArray[myArray.length-1]);
//0からケツまでの名前を小さい数順にお表示
for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
//上記と同じ意味
for (const value of myArray){
    console.log(value);
}

*/

const myArray =["岡田","岡島","直也","西川","大輔"];
const myArray2 =["南","杉本"];

myArray.unshift("けんや");// 先頭に追加
myArray.push("渡辺");// 最後尾に追加

myArray.shift();// 先頭にデータを消す
myArray.pop();// 最後尾のデータを消す

myArray.splice(1,0,"中田");//引数　myArreyの１番目の位置で０個データを取り除いて中田を挿入する。

const myArray3 = myArray.concat(myArray2);// concat関数・・・引数の配列を連結する。
 
console.log(myArray3.indexOf("けんや"));//indexOf関数・・・引数の値が配列の何番目にあるかを検索する。
console.log(myArray3.includes("けんや"))//includes関数・・・配列の中に引数の値が存在するかを検索。
for (const value of myArray3){
    console.log(value);
}


