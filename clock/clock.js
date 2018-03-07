const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

setDate = () => {
	//first get current date
	const now = new Date();

	//second hand
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds/60) *360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	// console.log(seconds)

	//minute hand
	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) *360) + 90;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`
	// console.log(minutes)
	// hour hand
	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) *360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`
	console.log(hours)
}




setInterval(setDate,1000)