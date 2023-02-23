    
    let cards=[]
    let cardsEL=document.getElementById('cards-el')
    let hasBlackJack=false
    let IsAlive=false
    let messageEl=document.getElementById('message-el')
    let message=''
    let sumEl=document.getElementById('sumel')
    document.querySelector('.newcards').disabled=true;
    let randomNumber = Math.floor(Math.random()*13)+1 
    //დაიმახსოვრე აქ ნეუ ქარდს ფუნქცია როგორ გამორთე ზოგადად როცა პირველად შედიხარ გვერდზე
   
     let playerEl = document.getElementById('player-el')
     
 

       
  



     


     










        function getRandomCard(){
            
        let randomNumber = Math.floor(Math.random()*13)+1 
            if (randomNumber>10){
            
                return 10

            }  else if (randomNumber===1){
            
              return 11
        }
            else{

                return randomNumber

        }
            
            
        }

    function startGame(){

       

    IsAlive = true
    let firstCard
    let secondCard
       firstCard = getRandomCard()
      secondCard = getRandomCard()
    cards= [firstCard,secondCard]
    sum= firstCard+secondCard    
    renderGame() 
    document.querySelector('.start').disabled=true;
    //looke at how you used queryselector for to disable and re-enable functions after clicking on the button
     




    }





    function renderGame(){
        
        
    
        if (sum<=20) {
            
            message=('Do you want to draw a new card?  ')
            document.querySelector('.newcards').disabled=false;
            playerEl.innerHTML = 'Do not Give up 💪 '
        }  else if (sum===21) {
        message=('you have got Blackjack!   ')
            hasBlackJack=true
            document.querySelector('.newcards').disabled=true;
            
        } else {
        
        message=('you are out of the game!  ')
       
    
        IsAlive=true



        }
        
        messageEl.textContent=message
        sumEl.textContent='Sum :'  + ' ' +  sum

        for(let i=0; i<2; i++){


            cardsEL.textContent+= cards[i] + ' '

        }


    
        
    }


    function newGame(){


        messageEl.textContent='Want to play a round'
    sumEl.textContent='Sum :'  + ' ' + 0
    cardsEL.textContent='Cards : '  
    document.querySelector('.newcards').disabled=true;
    document.querySelector('.start').disabled=false;



   



    }



    function newCards(){
        
    
        
        let newcard=getRandomCard()
        cards.push(newcard)
        cardsEL.textContent='Cards : '
        for(let i=0; i<cards.length; i++){


            cardsEL.textContent+= cards[i] + ' '

        }
           sum+=newcard
           sumEl.textContent='Sum :'  + ' ' +  sum
        
        
        if (sum<=20) {
            
            message=('Do you want to draw a new card?  ')
            playerEl.innerHTML = 'Do not Give up 💪 '
        } else if (sum===21) {
        message=('you have got Blackjack!   ')
        document.querySelector('.newcards').disabled=true; 
            hasBlackJack=true
            playerEl.textContent = 'You won 1000$ 🥳🥳🥳 '
        } else{
        
        message=('you are out of the game!  ')
        IsAlive=true
        playerEl.innerHTML = 'You lose  😟 '
        document.querySelector('.newcards').disabled=true; 


        }
        messageEl.textContent=message

        
    }





