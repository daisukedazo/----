//問題　配列member["岡島","岡田","中田","西川","南"]のなかに名前name="けんや"が存在していた場合「配列の番号」を、存在していなかったっ場合「該当者なし」を表示する。
const member = ["岡島","岡田","中田","西川","南"];
const name= "中田";

const x =member.indexOf(name);
if(x==-1){
    console.log("該当者なし");
}else{
    console.log(x);
}

//問題２　配列member["岡島","岡田","中田","西川","南","渡辺"]を["渡辺","南","西川","中田","岡田","岡島"]に変換してください。
//ヒント　for文を使う（ループ３回）
//ヒント２　値を交換するとき、一旦変数に置いておく

let member2 = ["岡島","岡田","中田","西川","南","渡辺"]
member2.reverse();

//配列の半分の回数交換を行う
for (let i = 0 ; i < member2.length/2; i++){
    const y = member2[i];//交換する片方の値をyに持っておく
    member2[i] = member2[member2.length - 1 - i];//交換する
    member2[member2.length - 1 - i] = y;
}

console.log(member2)