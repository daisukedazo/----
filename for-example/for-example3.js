const userDatalist = [
    {number: 17, name:"大谷",position: 1},
    {number: 51, name:"鈴木",position: 9},
    {number: 55, name:"松井",position: 7}
];

/*問題1 上のdatalistを使って、背番号nを入力した時、値が等しい人がいれば「名前とポジション」を、
　　　　　いない場合は「該当者なし」と表示しなさい。*/
const n= 17;
let result = false;
for(let i = 0; i < userDatalist.length -1 ;i++){
    if(n ==userDatalist[i].number){
        result = true;
    console.log(userDatalist[i].name);
    console.log(userDatalist[i].position);
   }
}
    if(result == false){
    console.log("該当者なし");
}
