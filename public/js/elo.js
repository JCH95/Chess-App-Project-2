const Elo = require('elo-calculator');

const elo = new Elo({
    // The rating of which each initialized player will start with
    rating: 1200,
    // The coefficient, called the K-factor, is the maximum possible adjustment per game.
    // Which value is used depends on one or more the following points:
    // 1. The number of games the player has played
    // 2. The current rating of the player
    // 3. The highest rating the player has ever had.
    // Weak and new players generally have a higher coefficient than stronger, more experienced players.
    // The conditions used to apply a k-factor are based the ones used by the World Chess Federation (http://www.fide.com/fide/handbook.html?id=172&view=article)
    k: [40, 20, 10] // figure this out later
});


// const player = elo.createPlayer(currentRating, numberOfGamesPlayed, highestRating);
// const player1 = elo.createPlayer(1890);
// const player2 = elo.createPlayer(1900, 50, 1950);
// const player3 = elo.createPlayer(1550); // most likely use this one for elo score. 




winner = { id: 1, elo: 1200 };
loser = { id: 2, elo: 1111 };
// 
function updateUsers(winner, loser) {
    // winner{ id: num, elo:num }
    winner.playerElo = elo.createPlayer(winner.elo);
    // winner{ id: num, elo:num playerElo: <stuff>}
    loser.playerElo = elo.createPlayer(loser.elo);
    console.log(winner, loser);
    elo.updateRatings([[winner.playerElo, loser.playerElo, 1]]);
    winner.elo = winner.playerElo.rating
    loser.elo = loser.playerElo.rating
    // We now have a winner and loser object with id, elo, playerElo object
    
}

updateUsers(winner, loser);
// function that updates elo values. 
// elo.updateRatings([
// [player1, player2, 1], // Player 1 wins
// [player2, player1, 0], // Player 2 loses
// [player2, player3, .5] // Player 2 and player 3 draws the game
// ]);

// console.log(player1.rating)
// console.log(player2.rating)




// elo.players.forEach(function (player, i) {
//     console.log(`Player ${i + 1} has played ${player.numberOfGamesPlayed} and has a rating of ${Math.round(player.rating)}`);
// });
// elo.updateRatings2("moo");
// (player.rating) is the value you need
// use prototype to add method to elo.
// elo.prototype chessupdate();
// When you inject the db date to handlebars make sure
// Click on player objects to recieve elo and set elo values
// const player1A = elo.createPlayer(db.playerelo);
// const player2A = elo.createPlayer(db.playerelo);
// elo.updateRatings([
//     [player1A, player2A, 1], // Player 1 wins
//     [player2A, player1A, 0], // Player 2 loses
// ]);
// send new updated values 