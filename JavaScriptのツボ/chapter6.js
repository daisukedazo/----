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