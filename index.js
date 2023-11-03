function scuberGreetingForFeet(feet){
  if (feet <= 399){
    return 'This one is on me!'
  } 
    else if (feet <= 2000) { 
    return 'That will be twenty bucks.'
  } 
    else if (feet <=2500) {
    return 'I will gladly take your thirty bucks.'
  }
    else if (feet >= 2501){
    return 'No can do.'
    }
}

function ternaryCheckCity(destination){
 const message = destination === 'NYC' ? ('Ok, sounds good.') : ('No go.')
 return message
}

function switchOnCharmFromTip(generous){
  switch(generous){
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
      break;
      default:
      return "Bye."
  }
}