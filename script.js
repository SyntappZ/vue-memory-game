window.onload = () => {
    
   new Vue({
     el: "#app",
     data: {
         title: 'Vue Memory Game',
         message: '',
         name: 'BiscuitmanZ 2019',
         points: 0,
         turnedArr: [],
         ids: [],
         pack: [],
         over: false,
         start: false,
         winner: false,
         counter: 1
     },
    methods: {
      makeRandomArray() {
         
         this.start = true;
         this.points = 5;
         let arr1 = []
         let arr2 = []
         let letters = ['X', 'B', 'G', 'E', 'O', 'Y']

         for(let i = 0; i < 6; i++) {
            arr1.push({id:i, face: letters[i], show: false, won: false})
            arr2.push({id:6 + i, face: letters[i], show: false, won: false})
         }
         
        let joinArrs = arr1.concat(arr2).sort(() => Math.floor(Math.random() * 3 - 1))
        
        this.pack = joinArrs;
        
     },
         turnOver(card) {
            card.show = true
            this.ids.length < 2 ? this.ids.push(card.id) : null
            this.turnedArr.push({id:card.id, face:card.face, show:card.show, won:card.won});


         if(this.turnedArr.length > 1) {
            if(this.turnedArr[0].face === this.turnedArr[1].face) {
               this.pack.forEach(e => {
                  e.id === this.ids[0] ? e.won = true : null
                  e.id === this.ids[1] ? e.won = true : null
               })
              this.title = 'Correct!'
              this.turnedArr = []
              this.ids = []
              this.points++
              console.log(this.counter)
              this.counter < 6 ? this.counter++ : this.winner = true
              
              setTimeout(() => {
               this.title = 'Vue Memory Game';
            }, 2000);

            }else{
               this.points--
               setTimeout(() => {
                  this.pack.forEach(e => e.won ? e.show = true : e.show = false)
                  this.points <= 0 ? this.endGame : null
                  this.turnedArr = []
                  this.ids = []
                  
               }, 600);
               this.points <= 0 ? this.over = true : this.over = false
            }
         }
        
   
      },
      
      restart() {
        location.reload();
      },
         
         
        isDisabled(card) {
         if(card.show || this.turnedArr.length >= 2 || this.over || this.winner) {
            return true
         }
      }
       
       
        
        
        
        
        
     },
     computed: {
         endGame() {
            return this.over ? 'GAME OVER!' : this.winner ? 'WINNER!' : null
         }
         
      }
         
         
     
    
    
     
     
   })
     
     
     
     
     
     
     
    
     
     
     
     
     
     
     
     
     
 }