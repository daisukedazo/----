var items = [
    {
        name: '水',
        price: 100,
        quantity: 0
    },
    {
        name: '魚',
        price: 300,
        quantity: 0
    },
    {
        name: '肉',
        price: 500,
        quantity: 0
    }
]

var app = new Vue({
    el: '#title',
    data: {
        message: 'Hello Vue!!',
        items: items
    }
})