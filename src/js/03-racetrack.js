import '../css/common.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCount = 0;
const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody')
}

refs.startBtn.addEventListener('click',onStart);

function onStart() {
    const promises = horses.map(run)
    raceCount += 1
    updateWinnerField('')
    updateProgressFiel('🤖 Заезд начался, ставки не принимаются!') 
    determineWinner(promises);
    waitForAll(promises)
    
}


function determineWinner(horsesP) {
    Promise.race(horsesP).then(({horse, time}) =>{  
        updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time}
        времени`),
        updateResultsTable( {horse, time, raceCount})
        });
    }

function waitForAll(horsesP) {
    Promise.all(horsesP).then(() => {
        updateProgressFiel('📝 Заезд окончен, принимаются ставки.')
         })
}

function updateWinnerField(message) {
    refs.winnerField.textContent = message
}

function updateProgressFiel(message) {
    refs.progressField.textContent = message
}

function updateResultsTable ({horse, time, raceCount}) {
    const tr = `<tr><td>${raceCount}</td><td>${horse}</td><td>${time}</td></tr>`
    refs.tableBody.insertAdjacentHTML("beforeend", tr)
}

function getRandomeTime (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */


/*
 * Promise.all([]) для ожидания всех промисов
 */


// run('Mango') 
//     .then(x => console.log(x))
//     .catch(e => console.log(e))

