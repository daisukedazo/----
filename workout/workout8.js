const { VueElement, vModelSelect } = require("vue")

//商品を連想配列でもつ
var items = [
    {
        name: 'チョコ味',
        price: 1500,
        quantity:0
    },
    {
        name:'抹茶味',
        price: 1700,
        quantity: 0
    },
    {
        name:'いちご味',
        price: 1800,
        quantity: 0
    }
]

var vm = new Vue({
    el: 'app',
    data: {
        items: items
    },
    filters: {
        //金額のフォーマット
        numberWithDelimiter: function(value){
            if(!value){
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1')
        }
    },
    methods: {
        //購入ボタンが押された時の操作
        dobuy: function(){
            alert('購入金額は' + this.totalPliceWithTax + '円です')
            this.items.forEach(function(item){
                item.quantity = 0
            })
        }
    },
    conputed: {
        //小計金額
        totalPlice: function(){
            return this.items.reduce(function (sum, item){
                return sum + (item.price * item.quantity)
            },0)
        },
        //税込金額
        totalPliceWithTax: function(){
            return Math.floor(this.totalPlice * 1.08)
        },
        //購入できる金額以上か判断
        canBuy: function(){
            return this.totalPlice >= 10000
        },
        //canBuyが偽の時に赤く表示する
        errorMessageStyle: function(){
            return{
                border: this.canBuy ? '': '1px solid red',
                coler: this.canBuy ? '': 'red'
            }
        }
    }
})
window.vm = vm
