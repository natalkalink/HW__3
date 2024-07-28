//З клавіатури вводиться вік людини.
//Вивести на екран ким він є(дитиною у садочку, 
//школярем, студентом, працівником, пенсіонером).

let userAge = parseInt(prompt('Введіть Ваш вiк','18'))

if (userAge <= 0 ){
	alert('Ви ще не народились!')
	document.write(`Ваш вiк = ${userAge}!<br>Ви ще не народились!`)
}
//розум що ця перевiрка не має сенсу вiдносно цього завдання,
//але хотiлося перевiрити, для чистоти експерименту,
//якщо користувач випадково введе від'ємне значення або 0
else if (userAge <= 2){
	alert('Ви ще немовля!')
	document.write(`Ваш вiк = ${userAge} рокiв!<br>Ви ще немовля!`)
}
else if (userAge <=6 ){
	alert('Ви є дитиною у садочку')
	document.write(`Ваш вiк = ${userAge} рокiв! <br>Ви є дитиною у садочку!`)
}
else if (userAge <= 17) {
	alert('Ви школяр')
	document.write(`Ваш вiк = ${userAge} рокiв! <br>Ви школяр!`)
}
else if (userAge <= 24){
	alert('Ви студент')
	document.write(`Ваш вiк = ${userAge} рокiв! <br>Ви студент!`)
}
else if (userAge <= 59){
	alert('Ви працівник')
	document.write(`Ваш вiк = ${userAge} рокiв! <br>Ви працівник!`)
} else if (userAge <= 99){
	alert('Ви пенсіонер')
	document.write(`Ваш вiк = ${userAge} рокiв! <br>Ви пенсіонер!`)
}
else if (userAge <= 122){
	alert('Вiтаю! Ви довгожитель!')
	document.write(`Ваш вiк = ${userAge} рокiв! <br>Ви довгожитель!`)
}
else{
	alert(`Ви найстарiша людина на Землi!`)
	document.write(`Ви найстарiша людина на Землi!`)
}
	
