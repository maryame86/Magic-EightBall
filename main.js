// Start game variables //
const startButton = document.querySelector('.start');
const magicWord = document.querySelector('.magic');
const eightBallWord = document.querySelector('.ball');

// Eightball variables //
const eightBall = document.querySelector('.ans');
const cover = document.querySelector('.eight');

// Sidebar variables //
const sideBar = document.querySelector('.sidebar');
const askButton = document.querySelector('.ask');
const textArea = document.querySelector('textarea').innerText;
const againButton = document.querySelector('.again');

// Starting Game transitions

const startGame = (event) => {
    startButton.onclick;

    // tranistions from start to game //
    magicWord.style.color = "transparent";
    eightBallWord.style.color = "transparent";

    eightBallWord.style.visibility = "hidden";
    magicWord.style.visibility = "hidden";

    startButton.style.visibility = "hidden";
    magicWord.style.textShadow = "none";
    eightBallWord.style.textShadow = "none";

    // if statement for media queries //

    if (window.matchMedia("(min-width: 992px)").matches) {
        sideBar.style.width = "25vw";

    } else if (window.matchMedia("(max-width: 480px)").matches) {
        sideBar.style.height = "250px";
        document.querySelector('.question').style.height = "230px"; 

    } else if (window.matchMedia("(max-width: 1025px)").matches) {
        sideBar.style.height = "35vh";
        document.querySelector('.question').style.height = "32vh"; 
    } 


    // Sidebar content visibility //
    document.querySelector('.question').style.visibility = "visible";
    document.querySelector('.question').style.color= "#f5f5f5";

};

// Eightball animations & functionality //
document.querySelector('.ask').disabled = true;

const askQuestion = (event) => {
textArea.onkeypress;
document.querySelector('.ask').disabled = false;  
};

const giveAnswer = (event) => {
    let randomNum = Math.floor(Math.random() * 8);
    askButton.onclick;

// Eightball transitions //    
    eightBall.animate([
        { transform: 'translateY(50px)' }, 
        { transform: 'translateY(-50px)' },
        { transform: 'translateY(50px)' },
        { transform: 'translateY(0px)' }
    ], {
        duration: 1000
    });

    cover.animate([
        { transform: 'translateY(50px)' }, 
        { transform: 'translateY(-50px)' },
        { transform: 'translateY(50px)' },
        { transform: 'translateY(0px)' }
    ], {
        duration: 1000
    });
   
    cover.style.visibility = "hidden";
    cover.style.transitionDelay = "1.5s";
    cover.style.transitionTimingFunction = "ease-out";

    document.querySelector('img').animate([
        { transform: 'translateY(50px)' }, 
        { transform: 'translateY(-50px)' },
        { transform: 'translateY(50px)' },
        { transform: 'translateY(0px)' }
    ], {
        duration: 1000
    });
    
    setTimeout(() => { 
        eightBall.innerText = randomNum;
    switch (randomNum) {
    case 0:
        eightBall.innerText = 'It is certain.';
        break;
    case 1:
        eightBall.innerText = 'It is decidely so..';
        break;
    case 2:
        eightBall.innerText = 'Reply hazy, try again..';
        break;
    case 3:
        eightBall.innerText = 'Cannot perdict now.';
        break;   
    case 4:
        eightBall.innerText = 'Do not count on it';    
        break;
    case 5:
        eightBall.innerText = 'My sources say no.';
        break;
    case 6:
        eightBall.innerText = 'Signs point to yes';
        break;
    case 7:
        eightBall.innerText = 'Outlook not so good';
        break;
    default:
        eightBall.innerText ='Error, try again later';
    }
 }, 1500);

 document.querySelector('.ask').disabled = true;
};

// Reset functions //
const reset = () => {
    document.querySelector('.reset').onclick;
    location.reload();
};

const tryAgain = (event) => {   
    againButton.onclick;
    cover.style.visibility = "visible"; 
    cover.style.transitionDelay = "0s"; 
    document.getElementById('form').reset();
};