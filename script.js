const body = document.querySelector('body');
const slider =document.querySelector('.slider');

let counter=1;

setInterval(function () {
		if(counter===3)
{
counter =0;
}
counter++;

slider.style.backgroundImage='url(img/0'+counter+'.png)';

}
, 3000);


