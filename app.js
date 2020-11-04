/* JS  */

var scores,roundScore,activePlayer,gamePlaying;

init();  // initializer function

function init() {
    gamePlaying=true;
    activePlayer=0;
    roundScore=0;
    scores = [0,0];

    document.querySelector('.dice').style.display= 'none' ;

   document.getElementById('score--0').textContent= '0';
   document.getElementById('score--1').textContent= '0';
   document.getElementById('current--0').textContent= '0';
   document.getElementById('current--1').textContent= '0';

   document.getElementById('name--0').textContent = 'Player 1';
   document.getElementById('name--1').textContent = 'Player 2';

   document.querySelector('.dice').classList.add('hidden');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
}

//document.querySelector('#current--' + activePlayer).textContent=dice;


document.querySelector('.btn--roll').addEventListener('click', function() {

    if (gamePlaying) {

   var dice = Math.floor(Math.random() * 6) +1;
   var diceDOM=document.querySelector('.dice');
   diceDOM.style.display = 'block'; 
   diceDOM.src = 'dice-' + dice + '.png'; 

   // Updating score

   if(dice!==1)
   {
       // Add score
       roundScore += dice;
       document.querySelector('#current--' + activePlayer).textContent=roundScore ;
   }
   else{
       // Turn changes
        nextPlayer();
   }

  }

});

document.querySelector('.btn--hold').addEventListener('click', function() {

    if (gamePlaying) {

    // Add current score to global score
   scores[activePlayer] += roundScore;

   document.querySelector('#score--' + activePlayer).textContent =   scores[activePlayer]; 

    if(scores[activePlayer]>=100)
    {
        document.querySelector('#name--' + activePlayer).textContent = '!Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        gamePlaying=false;
    }
    else
    {

      nextPlayer();  // turn changes

    }
  }

});

function nextPlayer() {
    activePlayer = activePlayer===0?1:0;
       roundScore = 0;
       document.getElementById('current--0').textContent = '0';
       document.getElementById('current--1').textContent = '0';

      // document.querySelector('.player--0').classList.remove('player--active');
      // document.querySelector('.player--1').classList.add('player--active');

       document.querySelector('.player--0').classList.toggle('player--active');
       document.querySelector('.player--1').classList.toggle('player--active');

       document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init);