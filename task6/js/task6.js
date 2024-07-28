//З клавіатури вводиться номер дня тижня.Вивести на екран назву дня.

let weekDay = parseInt(prompt('Введiть номер дня тижня від 1 до 7','3'))

if (weekDay === 1){
	alert('Сьогоднi понедiлок!')
	document.write(`Сьогоднi понедiлок!`)
}else if (weekDay === 2){
	alert('Сьогоднi вiвторок!')
	document.write(`Сьогоднi вiвторок!`)
} else if (weekDay === 3){
	alert('Сьогоднi середа!')
	document.write(`Сьогоднi середа!`)
} else if (weekDay === 4) {
	alert('Сьогоднi четвер!')
	document.write(`Сьогоднi четвер!`)
}else if (weekDay === 5) {
	alert('Сьогоднi пятниця!')
	document.write(`Сьогоднi пятниця!`)
}else if (weekDay === 6) {
	alert('Сьогоднi cубота!')
	document.write(`Сьогоднi cубота!`)
} else if (weekDay === 7) {
	alert('Сьогоднi недiля!')
	document.write(`Сьогоднi недiля!`)
}else{
	alert('Невірний номер дня тижня! Введіть число від 1 до 7!')
	document.write(`Невірний номер дня тижня! Введіть число від 1 до 7!`)
}