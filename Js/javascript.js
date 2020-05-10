var score = 0;



function closedResult(){
    document.getElementById('result').style.display= 'none'
    document.getElementById('starter').style.display= 'block'
    document.getElementById('rules').style.display= 'block'
    
   
}

function selected(id, cor){
    document.getElementById('starter').style.display= 'none'
    document.getElementById('rules').style.display= 'none'
    document.getElementById('result').style.display= 'block'
    document.getElementById('imgSelect').src = 'images/icon-'+id
    document.getElementById('imgSelect').style.borderColor = cor;
    
    var sourch = Math.floor(Math.random()*3);
switch(sourch){

    case 0:
         document.getElementById('selectmachine').src = 'images/icon-paper.svg'
         if(id=='paper.svg' && sourch == 0 ){
             document.getElementById('wins').innerHTML= 'PLAY AGAIN'
         }
         if(id=='rock.svg' && sourch == 0 ){
            document.getElementById('wins').innerHTML= 'YOU LOSE'
        }
        if(id=='scissors.svg' && sourch == 0 ){
            document.getElementById('wins').innerHTML= 'YOU WIN'
            document.getElementById('pontos').innerHTML = score++
        }
         break;

         case 1:
            document.getElementById('selectmachine').src = 'images/icon-scissors.svg'
            if(id=='paper.svg' && sourch == 1 ){
            document.getElementById('wins').innerHTML= 'YOU LOSE'
            }
            if(id=='scissors.svg' && sourch == 1 ){
                document.getElementById('wins').innerHTML= 'PLAY AGAIN'
            }
            if(id=='rock.svg' && sourch == 1 ){
                document.getElementById('wins').innerHTML= 'YOU WIN'
                document.getElementById('pontos').innerHTML = score++
            }
            break;

            case 2:
                document.getElementById('selectmachine').src = 'images/icon-rock.svg'
                if(id=='paper.svg' && sourch == 2 ){
                document.getElementById('wins').innerHTML= 'YOU WIN'
                document.getElementById('pontos').innerHTML = score++
                    }
                    if(id=='scissors.svg' && sourch == 2 ){
                        document.getElementById('wins').innerHTML= 'YOU LOSE'
                    }
                    if(id=='rock.svg' && sourch == 2 ){
            document.getElementById('wins').innerHTML= 'PLAY AGAIN'
                        document.getElementById('pontos').innerHTML = score++
                    }
                break;
}
    
}
function cliqueRules(){
    document.getElementById('rulesImg').style.display = 'block'
    document.getElementById('starter').style.display = 'none'
    
    
}
function cliqueRulesclosed(){
    document.getElementById('rulesImg').style.display = 'none'
    document.getElementById('starter').style.display = 'block'
}