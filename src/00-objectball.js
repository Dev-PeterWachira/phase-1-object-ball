function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}
function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
        const players = game[team].players;
        if (players[playerName]) {
            return players[playerName].points;
        }
    }
    return "Player not found";
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        const players = game[team].players;
        if (players[playerName]) {
            return players[playerName].shoe;
        }
    }
    return "Player not found";
}

function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return "Team not found";
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            const players = game[team].players;
            return Object.values(players).map(player => player.number);
        }
    }
    return "Team not found";
}
function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        const players = game[team].players;
        if (players[playerName]) {
            return players[playerName];
        }
    }
    return "Player not found";
}

function mostPointsScored() {
    const game = gameObject();
    let highestPoints = 0;
    let topScorer = "";

    for (const team in game) {
        const players = game[team].players;
        for (const player in players) {
            if (players[player].points > highestPoints) {
                highestPoints = players[player].points;
                topScorer = player;
            }
        }
    }
    return topScorer;
}
function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    // Calculate points for the home team
    for (const player in game.home.players) {
        homePoints += game.home.players[player].points;
    }

    // Calculate points for the away team
    for (const player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (const team in game) {
        const players = game[team].players;
        for (const player in players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}

function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals = "";

    for (const team in game) {
        const players = game[team].players;
        for (const player in players) {
            if (players[player].steals > mostSteals) {
                mostSteals = players[player].steals;
                playerWithMostSteals = player;
            }
        }
    }

    return longestName === playerWithMostSteals;
}
