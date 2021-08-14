
//........................timer.........................

document.addEventListener('DOMContentLoaded', function() {
	const lastDate = new Date('August 28 2021 00:00:00');

	const daysVal = document.querySelector('.value-day');
	const hoursVal = document.querySelector('.value-hours');
	const minutesVal = document.querySelector('.value-minutes');
	const secondsVal = document.querySelector('.value-seconds');

	const daysText = document.querySelector('.text-day');
	const hoursText = document.querySelector('.text-hours');
	const minutesText = document.querySelector('.text-minutes');
	const secondsText = document.querySelector('.text-seconds');

	// функция склонения числительных
	function declOfNum(number, titles) {  
	    let cases = [2, 0, 1, 1, 1, 2];  
	    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];  
	}

	const timeCount = function() {
		let now = new Date();
		let leftUntil = lastDate - now;
		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

		if (leftUntil < 0) {
			document.querySelector('.timer__content').textContent = 'Акция завершена!';
		}

		daysVal.textContent = days;
		if (days < 10) {
			daysVal.textContent = `0${days}`;
		}

		hoursVal.textContent = hours;
		if (hours < 10) {
			hoursVal.textContent = `0${hours}`;
		}

		minutesVal.textContent = minutes;
		if (minutes < 10) {
			minutesVal.textContent = `0${minutes}`;
		}

		secondsVal.textContent = seconds;
		if (seconds < 10) {
			secondsVal.textContent = `0${seconds}`;
		}

		daysText.textContent = declOfNum(days, ['day', 'days', 'days']);	
		hoursText.textContent = declOfNum(hours, ['hour', 'hours', 'hours']);
		minutesText.textContent = declOfNum(minutes, ['minute', 'minutes', 'minutes']);
		secondsText.textContent = declOfNum(seconds, ['second', 'seconds', 'seconds']);
	}

	timeCount();
	setInterval(timeCount, 1000);

//.......................Copiright......................	

	let date = new Date();
	let copy = document.querySelector('.copy-date').innerHTML = date.getFullYear();

//......................SmothScroll.....................

	const smoothLinks = document.querySelectorAll('a[href^="#"]');
	
	for (let smoothLink of smoothLinks) {
	    smoothLink.addEventListener('click', function (e) {
	        e.preventDefault();
	        const id = smoothLink.getAttribute('href');

	        document.querySelector(id).scrollIntoView({
	            behavior: 'smooth',
	            block: 'start'
	        });
	    });
	};

});