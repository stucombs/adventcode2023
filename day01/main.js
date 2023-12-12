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

	console.log(`ANSWER: ${total}`);
}

main();
