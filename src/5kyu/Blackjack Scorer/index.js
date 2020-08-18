  /*
    persudo code - derive the sum of A.
    
    Assume k is the sum of A.
    
    condition:
    1. In a deck of cards, the possible count of A is 0 to 4.
    2. The highest score of the cards that is less than or equal to 21.
    3. An Ace can be counted as either 1 or 11.
    
    In these condition, the posible of k is
    
    if countOfA === 0 then k === 0;
    if countOfA === 1 then k === 1 or k === 11; 
    if countOfA === 2 then k === 2 or k === 12;
    if countOfA === 3 then k === 3 or k === 13;
    if countOfA === 4 then k === 4 or k === 14;
    
    => maximum_k === countOfA + 10;
       minimum_k === countOfA;
  */


function scoreHand(cards) {
  let countOfA = 0;
  let score = 0;
  
  // Except for the A, get the sum of numbers from cards and the count of A.
  cards.forEach(value=>{
    switch(value){
      case 'A':
        countOfA++;
        break;
        
      case 'J':
      case 'Q':
      case 'K':
        score += 10;
        break;
        
      default:
        score += (+value);  // Parse the string to integer.
        break;
    }
  });
  
  
  if(countOfA === 0) return score;
  
  // Add the sum of A and score.
  let current = score + (countOfA + 10);
  return (current <= 21)? current: (current-10);
}