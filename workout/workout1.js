/*連想配列
let member = {
    20224:"飯田",
    20031:"岡田",
    20193:"岡島",
    20222:"西川",
    20303:"南"
};*/

/*データの取り出し
console.log("20222:"+member["20222"]);*/

/*データの書き換え
member["20224"]="気谷";
console.log(member["20224"]);*/

//配列の配列
let member = [
    {no:"0001",name:"気谷"},
    {no:"0002",name:"岡田"},
    {no:"0003",name:"岡島"},
    {no:"0004",name:"西川"},
    {no:"0005",name:"南"}
];
//名簿の０番目のNo.と名前を出力
console.log(member[1]["no"]+":"+member[1]["name"]);

//for文
/*for(初期化式;条件式;加算式){
    ここに書いた式が繰り返される
}*/
let total = 0;//合計をいれる変数
for(let i = 1 ; i <= 10 ; i++){
   total=total+i;
}
console.log("合計は" + total);

//while文
/*while(条件式){
ここに書いた処理が繰り返される
} */

 /*以下の文だと無限ループになる

 let count = 0;
while(count >= 0){
    count= count+1;
}*/
 let n = 1;
 let output =""
 while(n <= 20){//nが２０以下なら繰り返す
    if(n % 2 == 0){//nが偶数かどうか
        output = output + n + "";
    }
    n = n + 1;
 }
 console.log (output);