let move = 0;  
const slyderLine = document.querySelector('.lenta');
//берем блок с картинками

var colvo  = document.getElementsByClassName("lenta")[0].childElementCount;
console.log(colvo);
//считаем количество картинок

let colvopx = 0;
colvopx = colvo * 250 - 250;
//преобразуем количество в размер в пикселях


document.querySelector('.slyder-next').addEventListener('click', function(){
	move = move + 250; 
	if (move > colvopx){
		move = 0;
	}
	slyderLine.style.top = -move + 'px'  
	//после нажатия смещяем блок на -400 ппикселей/ максимум 1600 пикселей если больше меняет на 0 пикселей
});
//кнопка next/работает за счет смещения блока влево

document.querySelector('.slyder-back').addEventListener('click', function(){
	move = move - 250;
	if (move < 0){
		move = colvopx;
	}
	slyderLine.style.top = -move + 'px'
	//после нажатия смещяем блок на 400 ппикселей/ максимум 1600 пикселей если больше меняет на 0 пикселей
});
//кнопка back/работает за счет смещения блока вправо