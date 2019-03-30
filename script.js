window.onload = () => {
    
    new Vue({
     el: "#app",
     data: {
         title: 'Vue Memory Game',
         message: '',
         name: 'BiscuitmanZ 2019',
         points: 10,
         turnedArr: [],
         winners: [],
         pack: [],
         start: false,
         i: 1
     
     },
    methods: {
      makeRandomArray() {
         this.start = true;
         let arr1 = []
         let arr2 = []
         let letters = ['X', 'B', 'G', 'E', 'O', 'Y']
         for(let i = 0; i < 6; i++) {
            arr1.push({id:i, face: letters[i], show: false, won: false})
            arr2.push({id:6 + i, face: letters[i], show: false, won: false})
         }
         // () => Math.floor(Math.random() * 3 - 1)
        let joinArrs = arr1.concat(arr2).sort()
        
        this.pack = joinArrs;
        
     },
         turnOver(card) {
             card.show = true
            if(this.turnedArr.length < 2) {
              
               this.turnedArr.push({id:card.id, face:card.face, show:card.show, won:card.won});
            }
            if(this.turnedArr.length > 1){
               if(this.turnedArr[1].face === this.turnedArr[0].face){
                  this.turnedArr[1].win = true;
                  this.turnedArr[0].win = true;
                  this.winners.push(this.turnedArr)
                  this.turnedArr = this.winners
                  
                  console.log(this.winners)
               }else if(this.turnedArr[1].face != this.turnedArr[0].face){
                 
                 
                 setTimeout(() => {
                 this.pack.forEach(e => e.won ? e.show = true : e.show = false)

                 this.turnedArr = []
                  console.log(this.turnedArr.length)
                 }, 1000);
               }
               
            }
            
           
            
            
         },
         
        isDisabled(card) {
         if(card.show || this.turnedArr.length === 2) {
            return true
         }
      }
       
       
        
        
        
        
        
     },
     computed: {
      
     }
    
    
     
     
    })
     
     
     
     
     
     
     
    
     
     
     
     
     
     
     
     
     
 }