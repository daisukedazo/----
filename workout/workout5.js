// const userDatalist = [
//     {number: 17, name: "大谷", position: 1},
//     {number: 51, name: "鈴木", position: 9},
//     {number: 55, name: "松井", position: 7},
// ];
// const n = 17;
// let result = false;
// for(let i = 0; i < userDatalist.length -1 ;i++){

//     if(n ==userDatalist[i].number){
//         result = true;
//         console.log(userDatalist[i].name);
//         console.log(userDatalist[i].position);
//     }
// }
//      if(result == false){
//         console.log("該当者なし");
//      }

     const A = 5;
     let answer;

         function sum(n){
            let x = 0;
            for(let i =0 ;i<=n; i++){
                x += i;
            }
            return x;
         };
         function Ave(n){
            return sum(n)/n;
         }

         answer = sum(A);
         console.log("合計:"+answer);

         answer = Ave(A);
         console.log("平均："+ answer);
         
