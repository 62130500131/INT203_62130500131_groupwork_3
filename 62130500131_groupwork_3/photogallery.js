const app = {
    data() {
        return {
            tasks: [{url: 'images/1.jpg',info : "Colorado, USA", fav: false},
                    {url: 'images/2.jpg',info : "Kadıköy/İstanbul, Turkey USA", fav: false},
                    {url: 'images/3.jpg',info : "Tre Cime di Lavaredo, Taliansko", fav: false}
                ]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].fav = !this.tasks[index].fav
        }
    },
    computed: {
        calculatedPhoto(){
            return this.tasks.length
        },
        calculatedLike(){
            return this.tasks.filter( t => t.fav ).length
        }
    }
}
Vue.createApp(app).mount('#app')