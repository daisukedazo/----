//商品を連想配列でもつ
var items = [
    {
        name: 'ダンベル',
        price: 5000,
        quantity:0
    },
    {
        name: 'ベンチ',
        price: 6500,
        quantity:0
    },
    {
        name: 'スクワットラック',
        price: 9000,
        quantity:0
    }
]

var vm = new Vue({
    el: '#app',
    data:{
        items: items
    },
    filters: {
        //金額のフォーマット
        numberWithDelimiter: function(value){
            if(!value){
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1')
        }
    },
    methods: {
        //購入ボタンが押された時の操作
        doBuy: function(){
            alert('購入金額は' + this.totalPriceWithTax + '円です')
            this.items.forEach(function(item){
                item.quantity = 0
            })
        }
    },
    computed: {
        //小計金額
        totalPrice: function(){
            return this.items.reduce(function (sum, item){
                return sum + (item.price * item.quantity)
            },0)
        },
        //税込金額
        totalPriceWithTax: function(){
            return Math.floor(this.totalPrice * 1.08)
        },
        //購入できる金額以上か判断
        canBuy: function(){
            return this.totalPrice >= 20000
        },
        //canBuyが偽の時に赤く表示する
        errorMessageStyle: function(){
            return {
                border: this.canBuy ?'':'1px solid red',
                coler: this.canBuy ?'':'red'
            }
        }
    }

})
window.vm = vm