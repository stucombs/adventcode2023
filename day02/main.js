import {
	TEST,
	INPUT
} from './input.js';

const parseInput = (input) =>
	input.replace(/\s/g, '');

const getGameNum = (game) =>
	+game[0];

const isBlue = (move) =>
	move.includes("blue");

const isRed = (move) =>
	move.includes("red");

const isGreen = (move) =>
	move.includes("green");

const moveSize = (move) =>
	+move.replace(/[^\d.-]+/g, '');

const isValidGame = (game) => {
	return game.every(move => {
		if( isBlue(move) && moveSize(move) > 14) { //14 blue cubes
			return false;
		}
		if( isGreen(move) && moveSize(move) > 13) { // 13 green cubes
			return false;
		}
		if( isRed(move) && moveSize(move) > 12 ) { //12 red cubes
			return false;
		}
		return true;
	});
}

const main = () => {
	let games = parseInput(INPUT);
	let total = 0;
	// Split into individual games
	games = games.split(/Game/).slice(1);
	games.map(game => {
		game = game.split(/[:;,]/);
		let gameNum = getGameNum(game); //get game number before we remove it to get just the moves
		game = game.slice(1);
		if( isValidGame(game) ) {
			total += gameNum;
		}
	});
	console.log(`ANSWER ${total}`);
}

main();
