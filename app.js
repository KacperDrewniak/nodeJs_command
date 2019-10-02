const parseArgs = require('minimist');
const colors = require('colors');
const fs = require('fs');

const command = parseArgs(process.argv.slice(2, 3));

const handleCommand = ({ add, remove, list }) => {
	if (add) {
		if (typeof add !== 'string') {
			return console.log('Wpisz nazwe zadania gościu  !! w formie tekstu'.red.bgWhite);
		} else if (add.length < 7) {
			return console.log('Ale gościu więcej niż 6 znaków'.red.bgWhite);
		}
		handleData(1, add);
	} else if (remove) {
		if (typeof remove === 'string' || remove.length > 7) {
			console.log('Wpisz nazwę usuwanego zadania tekst musi mieć typie więcej niż 7 znaków'.red);
			handleData(2, remove);
		}
	} else if (list || list === '') {
		handleData(3, null);
	} else {
		console.log('nwm typie jesteś pajacem');
	}
};

const handleData = (type, title) => {
	const database = fs.readFileSync('database.json');
	const tasks = JSON.parse(database);
	console.log(tasks);

	if (type === 1 || type === 2) {
		isExisted = tasks.find(task => task.title === title) ? true : false;
		if (type === 1 && isExisted) {
			return console.log('takie zadanie już istnieje typeczku');
		} else if (type === 2 && !isExisted) {
			return console.log('Nie mogę usunąć zadanie które fizyczne nie istnieje ');
		}
	}

	switch (type) {
		case 1:
			console.log('dodaje zadnaie');
			break;

		case 2:
			console.log('usuwam zadnaie');
			break;
	}
};

handleCommand(command);
