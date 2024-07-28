//З клавіатури вводяться імена двох дітей та кількість у них цукерок.
//Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, 
//або вивести, що кількість однакова.

let firstChildName = prompt('Name','Марк')
let secondChildName = prompt('Name', 'Семен')

let firstChildCandy = parseInt(prompt('Введiть кiлькiсть цукерок ','5')) 
let secondChildCandy = parseInt(prompt('Введiть кiлькiсть цукерок', '3'))

//-----------------------------------------
// варіант 3
if (firstChildCandy > secondChildCandy) {
	alert(`${firstChildName} має більше цукерок`)
} 
else if (firstChildCandy < secondChildCandy) {
	alert(`${secondChildName} має більше цукерок`)
} 
else {
	alert(`Кількість у ${firstChildName} та ${secondChildName} однакова`)
}

//--------------------------------------------------
//варіант 2
// if (firstChildCandy > secondChildCandy){
// 	alert(`${firstChildName} має більше цукерок`)
// }
// else {
// 	if (firstChildCandy < secondChildCandy){
// 		alert(`${secondChildName} має більше цукерок`)
// 	}
// 	else {
// 		alert(`Кількість у ${firstChildName} та ${secondChildName} однакова`)
// 	}
// }


//------------------------------------------------
//варіант 1
// if (firstChildCandy > secondChildCandy){
// 	alert(`${firstChildName} має більше цукерок`)
// }

// if (firstChildCandy < secondChildCandy) {
// 	alert(`${secondChildName} має більше цукерок`)
// }

// if (firstChildCandy === secondChildCandy) {
// 	alert(`Кількість у ${firstChildName} та ${secondChildName} однакова`)
// }
