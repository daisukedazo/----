// 02文字列オブジェクト
//let message = new String("おはよう"); 方法１
let message = "おはよう"// 方法２ よっぽどのことがない限りコッチ
console.log(message.length);
// includes『含む』
// indexOf『索引』についてはhello-world2参照
let file = "sample.jpg";
if(file.includes(".jpg")){
    console.log("jpgです。");
}

if(file.indexOf(".jpg")!=-1){// jpgが文字列の中にあるかどうかを判定し、見つからなかった場合は−１を返す
    console.log("jpgです。");
}
//slice-取り出し終了位置を指定し文字列を取り出す
let endIndex = file.indexOf(".");   //.の位置を取得
console.log(file.slice(0,endIndex));//.の直前までを出力

//split-指定した区切り文字で文字列の中身を分割して一つ一つを配列要素とする
let temp = file.split("."); //.で区切って配列に変換
console.log(temp[0]);       //配列要素の一つ目を出力

// 03配列オブジェクト
//Array.slice(開始位置,取り出し終了位置)-配列の中から取り出し終了位置を指定し文字列を取り出す
let card = [4,10,5,"K",7];
let endIndex2 = card.indexOf("K");//Kの位置を取り出す
let new_card = card.slice(0,endIndex2);//Kまでのカードを取り出す
console.log(new_card)
let ymd = [2021,3,1];   //2021年3月1日
console.log(ymd.join("/")); //文字列に変換して出力

//04日付オブジェクト
new Date("2019-5-1");   //①2019年5月1日0時0分0秒
new Date(2019,4,1);     //②2019年5月1日0時0分0秒　　配列の要素番号と同じで0から数える為、０が1月となる
new Date(2019,4,1,9,3,0);//③2019年5月1日9時3分0秒

new Date();//現在の日時

// 日付オブジェクトの主要メソッド
let now = new Date();//現在の日時オブジェクト
console.log(now.getFullYear());//年(西暦)が出力される
console.log(now.getMonth());//月が出力される
console.log(now.getDate());//日が出力される
console.log(now.getDay());//曜日(０を日曜とする0から6の数字)が出力される

//上記を６か月先へ進める
// now.setMonth(now.getMonth() + 6);
// console.log(now.getFullYear());//年(西暦)が出力される
// console.log(now.getMonth());//月が出力される(0を1月とし12月まで出力)
// console.log(now.getDate());//日が出力される
// console.log(now.getDay());//曜日(０を日曜とする0から6の数字)が出力される

// 日付オブジェクトを文字列に変換
console.log(now.toLocaleString());//日本語のブラウザでは、年/月/日　時：分：秒
console.log(now.toLocaleDateString());//年/月/日
console.log(now.toLocaleTimeString());//時:分:秒　　で出力される。

//曜日を日月火水木金で表示

let days = ["日","月","火","水","木","金","土"];//曜日の文字が入った配列を作成
let now1 = new Date();//今日の日付オブジェクト
console.log(days[now1.getDay()]+"曜日");//now1が何曜日かをgetDayに問い、その日の数値を返す（金曜なら５を返す）
                                       //返された数値に対応した配列上の文字をdays[]に代入して出力する。


