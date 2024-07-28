//Задача 3.
//Випадковим чином генерується число від 1 до 5. 
//Спробуйте вгадати число за 2 спроби.

let randomNumber = Math.floor(Math.random() * 5) + 1;
let firstTry = parseInt(prompt('Введiть число від 1 до 5\nПерша спроба!','3'))

if (randomNumber === firstTry) {
	alert(`Ви вгадали число!`)
	document.write(`
			Правильне число = ${randomNumber}<br>
			Перша спроба  = ${firstTry}
			`)
}
else {
	let secondTry = parseInt(prompt('Введiть число від 1 до 5\nДруга спроба!', '5'));
	
	if (randomNumber === secondTry){
		alert(`Ви вгадали число!`)
		document.write(`
			Правильне число = ${randomNumber}<br>
			Перша спроба  = ${firstTry}<br>
			Друга спроба = ${secondTry}
			`)
	}
	else { 
		alert(`Ви програли! Правильне число було ${randomNumber}`)
	}
	document.write(`
		Правильне число = ${randomNumber}<br>
		Перша спроба  = ${firstTry}<br>
		Друга спроба = ${secondTry}
	`)
}

