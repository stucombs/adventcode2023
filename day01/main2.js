import {
	TEST2,
	INPUT2
} from './input.js';

const words = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine'
];
const MATCH = {
	'one': 1,
	'two': 2,
	'three': 3,
	'four': 4,
	'five': 5,
	'six': 6,
	'seven': 7,
	'eight': 8,
	'nine': 9
};


const main = () => {
	let lines = sanitizeInput(TEST2);
	let total = 0;
	lines.map(line => {
		let modifiedLine = line.split(/(\d+)/);
		modifiedLine = modifiedLine.filter(Boolean);
		console.log(modifiedLine);
	});
}

main();
