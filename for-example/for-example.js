//練習１
const No =25;
if(No % 2 == 0){
    console.log("A");
}else if(No % 2 == 1){
    console.log("B");
}




//練習２

//英語と数学の点数が１４０点以上もしくは点数が１２０点以上かつ数学が８０点以上なsらば合格、それ以外ならば不合格

const eng = 70
const math = 60
const score = eng +math

if(score >= 140){
    console.log("合格")
}else if(score >= 120){
    if(math>=80){
        console.log("合格")
    }else{
        console.log("不合格")
    }
    
}else{
    console.log("不合格")
}

