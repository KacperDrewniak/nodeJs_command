const colors = require('colors');
const fs = require('fs');

const handleData = (type, title) => {
	const database = fs.readFileSync('database.json');
	let tasks = JSON.parse(database);
	// console.log(tasks);

	if (type === 1 || type === 2) {
		isExisted = tasks.find(task => task.title === title) ? true : false;
		if (type === 1 && isExisted) {
			return console.log('takie zadanie już istnieje typeczku');
		} else if (type === 2 && !isExisted) {
			return console.log('Nie mogę usunąć zadanie które fizyczne nie istnieje ');
		}
	}

	let dataJSON = '';
	switch (type) {
		case 1:
			tasks = tasks.map((task, index) => ({
				id: index + 1,

				title: task.title
			}));
			console.log('dodaje zadnaie');
			const id = tasks.length + 1;
			tasks.push({ id, title });
			console.log(tasks);
			dataJSON = JSON.stringify(tasks);
			fs.writeFileSync('database.json', dataJSON);
			console.log(`dodaj zadnaie ${title}`.white.bgGreen);
			break;

		case 2:
			tasks = tasks.map((task, index) => ({
				id: index + 1,

				title: task.title
			}));
			const index = tasks.findIndex(task => task.title === title);
			dataJSON = JSON.stringify(tasks);
			tasks.splice(index, 1);
			fs.writeFile('database.json', dataJSON, 'utf-8', err => {
				if (err) throw err;
				console.log(`Zadanie ${title} zostało usniete`);
			});
			break;

		case 3:
			console.log(`Lista zadań do zrobienia obejmuje ${tasks.length} pozycji do zrobienia`);
			if (tasks.length) {
				tasks.forEach((task, index) => {
					if (index % 2) return console.log(task.title.green);
					return console.log(task.title.yellow);
				});
			}
			break;
	}
};

module.exports = handleData;
