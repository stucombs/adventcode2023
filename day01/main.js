import {
	TEST,
	INPUT,
	TEST2,
	INPUT2
} from './input.js';

// PART 1
const sanitizeInput = (line) =>
	line.trim().split("\n");

const removeAlpha = (item) => 
	item.replace(/[^\d.-]+/g, '');

const getFirstLast = (item) =>
	[item[0], item.slice(-1)].join('');

const main = () => {
	let lines = sanitizeInput(INPUT);
	let total = 0;
	lines.map(line => {
		line = removeAlpha(line);
		total += +getFirstLast(line);
	});

	console.log(total);
}

// main();

// PART 2
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

const getFirst = (line) => {
}

const partTwo = () => {
	let lines = sanitizeInput(TEST2);
	let total = 0;
	lines.map(line => {
		let modifiedLine = line.split(/(\d+)/);
		modifiedLine = modifiedLine.filter(Boolean);
		console.log(modifiedLine);
	});

	// console.log(total);
}

partTwo();
