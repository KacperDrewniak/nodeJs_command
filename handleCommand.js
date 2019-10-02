const handleData = require('./handleData');

const handleCommand = ({ add, remove, list }) => {
	if (add) {
		if (typeof add !== 'string') {
			return console.log('Wpisz nazwe zadania gościu  !! w formie tekstu'.red.bgWhite);
		} else if (add.length < 7) {
			return console.log('Ale gościu więcej niż 6 znaków'.red.bgWhite);
		}
		handleData(1, add);
	} else if (remove) {
		if (typeof remove === 'string') {
			console.log('chyba usuwa'.red);
			handleData(2, remove);
		}
	} else if (list || list === '') {
		handleData(3, null);
	} else {
		console.log('nwm typie jesteś pajacem');
	}
};

module.exports = handleCommand;
