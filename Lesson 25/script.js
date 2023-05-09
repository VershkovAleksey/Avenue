var app = new Vue({
    el: "#app",
    data: {
        message: "Hello vue",
        count: 0,
        name: "Tom",
        visible: false,
        show: true,
        books:["book1", "book2", "book3", "book4"],
        motocycles:[
            {name:"Honda", color:"black", maxspeed:"180kmh"},
            {name:"BMW", color:"Green", maxspeed:"250kmh"},
            {name:"Kawasaki", color:"Yellow", maxspeed:"190kmh"},
            {name:"Ducati", color:"White", maxspeed:"300kmh"}
        ]
    },
    methods: {
        setMessage: function (event) {
            this.message = event.target.value;
        },
        setCounter: function (event) {
            this.count += 1;
        },
        getFactorial(count) {
            var result = 1;
            for (var i = 1; i <= count; i++) {
                result = result * i;
            }
            return result;
        },
        changeVisible(){
            this.visible = !this.visible;
        },
        changeShow(){
            this.show = !this.show;
        }

    }
})