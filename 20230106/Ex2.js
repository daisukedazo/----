var app = new Vue({
    el: '#title',
    data: {
        message: 'Hello Vue!!'
        
    },

methods: {
    // 購入ボタンが押された時の動作
    doBuy: function () {
        alert('購入金額は300円です')
     }
  }
})