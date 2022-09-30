const numberToString = (number) => {
	let initialTransform = number.toString();
	let arrayOfNumbers = initialTransform.split('');

	switch (initialTransform.length) {
		case 4:
			arrayOfNumbers.splice(1, 0, '.');
			break;
		case 5:
			arrayOfNumbers.splice(2, 0, '.');
			break;
		case 6:
			arrayOfNumbers.splice(3, 0, '.');
			break;
		case 7:
			arrayOfNumbers.splice(1, 0, '.');
			arrayOfNumbers.splice(5, 0, '.');
			break;
		case 8:
			arrayOfNumbers.splice(2, 0, '.');
			arrayOfNumbers.splice(6, 0, '.');;
			break;
		case 9:
			arrayOfNumbers.splice(3, 0, '.');
			arrayOfNumbers.splice(7, 0, '.');
			break;
	}

	const value = arrayOfNumbers.toString().replaceAll(',', '');
	return value;
}

const stringToNumber = (string) => {
	let value = Number(string.replaceAll('.', ''))

	return value
}

module.exports = {
	stringToNumber,
	numberToString
}