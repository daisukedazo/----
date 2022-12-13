/*問題２
  0から引数n（整数）までの合計を返す関数sumと、０からnまでの平均値を返す
  関数Aveをつくりなさい。*/
const A =5;
let answer;

  function sum(n){
     let x=0;
    for(let i =0 ; i<=n; i++ ){
     x += i;
    }
    return x;
  };
  function Ave(n){
    return sum(n)/n;
  }
  
  answer = sum(A);
  console.log("合計:"+ answer);
  
  answer = Ave(A);
  console.log("平均:"+ answer);
  

  const userDatalist = [
    {number: 17, name:"大谷",position: 1},
    {number: 51, name:"鈴木",position: 9},
    {number: 55, name:"松井",position: 7}
];
FindNumber(userDatalist,17);
FindNumber(userDatalist,51);
FindNumber(userDatalist,55);
FindNumber(userDatalist,1);

function FindNumber(list, number){

let result = false;
for(let i = 0; i < list.length ;i++){
    if(number ==list[i].number){
        result = true;
    console.log(list[i].name+"選手　ポジション"+list[i].position);
   }
}
    if(result == false){
       console.log("該当者なし");
}
}