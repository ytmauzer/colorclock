let counter = document.getElementById('timecounter');
let color = document.getElementById('color');

let colorClock = () => {
	let time = new Date();

	let h = (time.getHours() % 12).toString();
	let m = time.getMinutes().toString();
	let s = time.getSeconds().toString();

	if(h.length < 2) {
		h = '0' + h;
	}
	
	if(m.length < 2) {
		m = '0' + m;
	}
	
	if(s.length < 2) {
		s = '0' + s;
	}

	let hmsToString = h + ':' + m + ':' + s;
	let colorToString = '#' + h + m + s;

	counter.textContent = hmsToString;
	color.textContent = colorToString;

	document.body.style.background = colorToString;
};

colorClock();
setInterval(colorClock, 500);
