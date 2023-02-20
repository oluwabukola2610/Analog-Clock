let hour = document.querySelector('#hourr');
let minute = document.querySelector('#minute');

let second = document.querySelector('#second');

function setTime() {
	let date = new Date();
	let getHour = date.getHours();
	let getMin = date.getMinutes();
	let getSec = date.getSeconds();

	//calc rotation
	let hRotation = (30 * getHour) + (getMin / 2);
	let mRotation = 6 * getMin;
	let sRotation = 6 * getSec;

	hour.style.transform = `rotate(${hRotation}deg)`;
	minute.style.transform = `rotate(${mRotation}deg)`;
	second.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(setTime, 1000);