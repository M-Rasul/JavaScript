const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };
    const gameEvents = new Map([
        [17, '⚽ GOAL'],
        [36, '🔁 Substitution'],
        [47, '⚽ GOAL'],
        [61, '🔁 Substitution'],
        [64, '🔶 Yellow card'],
        [69, '🔴 Red card'],
        [70, '🔁 Substitution'],
        [72, '🔁 Substitution'],
        [76, '⚽ GOAL'],
        [80, '⚽ GOAL'],
        [92, '🔶 Yellow card'],
        ]);
        
        document.body.append(document.createElement('textarea'));
        document.body.append(document.createElement('button'));
        document.querySelector('button').addEventListener('click', function () {
           const text = document.querySelector('textarea').value;
           const textArr = text.trim().toLowerCase().split('\n');
           const trimmedTextArr = [];
           for(const w of textArr) {
            trimmedTextArr.push(w.trim());
           }
           const camelCaseArr = [];
           for(const word of trimmedTextArr) {
            camelCaseArr.push(word.slice(0, word.indexOf('_')) + word.slice(word.indexOf('_') + 1).
            replace(word.slice(word.indexOf('_') + 1)[0], 
            word.slice(word.indexOf('_') + 1)[0].toUpperCase()));
           }
           for(const [i, camel] of camelCaseArr.entries()) {
                console.log(`${camel.padEnd(30, ' ')} ${'✅'.repeat(i+1)}`);
           }
        })
        
        let events = [];
        for(const [, event] of gameEvents) {
            events.push(event);
        }
        const eventsSet = new Set(events);
        events = [...eventsSet];
        console.log(events);
        gameEvents.delete(64);
        console.log(gameEvents);
        const time = [...gameEvents.keys()].pop();
        console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);
        for(const [min, event] of gameEvents) {
            console.log(`${min>45?'[SECOND HALF]':'[FIRST HALF]'} ${min}: ${event}`);
        }
    for(const [num, scorer] of game.scored.entries()) {
        console.log(`Goal ${num+1}: ${scorer}`);
    }
    let sum = 0;
    for(const odd of Object.values(game.odds)) {
        sum += odd;
    }
    const avg = sum/Object.values(game.odds).length;
    console.log(avg);
    for(const [team, odd] of Object.entries(game.odds)) {
        console.log(`Odd of ${team==='x'?'draw':`victory ${game[team]}`}: ${odd}`);
    }
    const scorers = {};
    for(const scorer of game.scored) {
        if(!scorers[scorer]) {
            scorers[scorer] = 1;
        } else {
            scorers[scorer] += 1;
        }
    }
    console.log(scorers);
    
    const [players1, players2] = game.players;
    console.log(players1, players2);
    const [gk, ...fieldPlayers] = players1;
    console.log(gk, fieldPlayers);
    const allPlayers = [...players1, ...players2];
    console.log(allPlayers);
    const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
    console.log(players1Final);
    // const {team1, x: draw, team2} = game.odds;
    const {odds: {team1, x: draw, team2}} = game;
    console.log(team1, draw, team2);
    const printGoals = function (...players) {
        const numGoals = players.length;
        for(let i = 0; i < players.length; i++) {
            console.log(players[i], numGoals);
        }
    }
    printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
    printGoals(...game.scored);
    team1 < team2 && console.log('Team 1');
    team1 > team2 && console.log('Team 2');
