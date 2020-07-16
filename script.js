function ageInDays() {
    var birthYear = prompt('What Year Were U Born?')
    var ageInDayss = (2020 - birthYear) * 1;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('U R ' + ageInDayss + ' years old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
   }
   function reset() {
       document.getElementById('ageInDays').remove();
   }
  
   function generateCat() {
       var image = document.createElement('img');
       var div = document.getElementById('flex-cat-gen');
       image.src = "https://i.gifer.com/41bt.gif";
       div.appendChild(image);
     }

     function rpsGame(yourChoice) {
         console.log(yourChoice);
         var humanChoice, botChoice;
         humanChoice = yourChoice.id;
         botChoice = numberToChoice(randToRpsInt());
         console.log('Computer choice=',botChoice);
         results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
         console.log(results);
         message = finalMessage(results); // {'message': 'You Win', 'color': 'green'};
        console.log(message);

         rpsFrontEnd(yourChoice.id, botChoice, message)
    }

    function randToRpsInt() {
        return Math.floor(Math.random() * 3);
    }
    function numberToChoice(number) {
        return ['rock', 'paper', 'scissor'][number];
    }
    function decideWinner(yourChoice, ComputerChoice) {
        var rpsDatabase = {
            'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
            'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
            'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0},
        };

        var yourScore = rpsDatabase[yourChoice][ComputerChoice];
        var ComputerScore = rpsDatabase[ComputerChoice][yourChoice];

        return [yourScore, ComputerScore];
    }

function finalMessage([yourScore, ComputerScore]) {
  if (yourScore === 0) {
    return {'message': 'you lost', 'color': 'red'};
    }else if (yourScore === 0.5) {
        return {'message': 'you tied', 'color': 'yellow'};
    } else {
        return {'message': 'you win', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(45,235,0):'>"
    messageDiv.innerHTML = "<h1 style='color: " +finalMessage['color'] + "; font-size: 58px; padding: 30px; '>" + finalMessage['message'] + "</h1>" 
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(87,235,0):'>"
    
    
     document.getElementById('flex-box-rps-div').appendChild(humanDiv);
     document.getElementById('flex-box-rps-div').appendChild(messageDiv);
     document.getElementById('flex-box-rps-div').appendChild(botDiv);
     
}

var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = [];
if(copyAllButtons.length === 0) {
    for (let i=0; i < all_buttons.length; i++) {
        copyAllButtons.push(all_buttons[i].classList);
    }
}
if(copyAllButtons[1][1] !== undefined) {
    localStorage.setItem('buttons', copyAllButtons)
}
function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        for (let i=0; i < all_buttons.length;i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-danger');
        }
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        const copyItem = localStorage.getItem('buttons')
        const x = (copyItem.split(','))
        const y = []
        for (let index = 0; index < x.length; index++) {
         y.push(x[index].split('btn ')) 
            
        }
        console.log(y)
        for (let i=0; i < all_buttons.length;i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(y[i][1]);
        }
    } else if (buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    
}

function buttonsGreen() {
    for (let i=0; i < all_buttons.length;i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {

}