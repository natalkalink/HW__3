//З клавіатури вводиться номер місяця.Вивести до якої пори він відноситься

let monthNumber = parseInt(prompt('Введiть номер місяця вiд 1 до 12!','1'))

if (monthNumber <= 0 || monthNumber > 12){
	alert('Невірний номер мiсяця! Введіть число від 1 до 12!')
	document.write(`Невірний номер мiсяця! Введіть число від 1 до 12!`)
}
//хоча в завданнi цього нема ,
//додала цю перевiрку на випадок,
//якщо користувач випадково введе від'ємне значення або 0 або iнше число
else if (monthNumber <= 2 || monthNumber === 12){
	alert('Зараз зима!')
	document.write(` Зараз мiсяц = ${monthNumber}!<br>Зараз зима!`)
} else if (monthNumber >= 3 && monthNumber <=5){
	alert('Зараз весна!')
	document.write(` Зараз мiсяц = ${monthNumber}!<br>Зараз весна!`)
} else if (monthNumber >= 6 && monthNumber <= 8){
	alert('Зараз лiто!')
	document.write(` Зараз мiсяц = ${monthNumber}!<br>Зараз лiто!`)
} else if (monthNumber >= 9 && monthNumber <= 11) {
	alert('Зараз осiнь!')
	document.write(` Зараз мiсяц = ${monthNumber}!<br>Зараз осiнь!`)
} else{
	alert('Невірний номер мiсяця! Введіть число від 1 до 12!')
	document.write(`Невірний номер мiсяця! Введіть число від 1 до 12!`)
}