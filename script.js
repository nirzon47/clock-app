// DOM Elements
const body = document.body
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const meridian = document.getElementById('meridian')
const toggle = document.getElementById('toggle')
const greetingElement = document.getElementById('greeting')

// 24 Hour or 12 Hour mode, default is 12 Hour mode
let mode = 12

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
	setInterval(updateClock, 1000)
})

toggle.addEventListener('click', () => {
	mode = mode === 12 ? 24 : 12
	updateClock()
})

// Functions

const updateClock = () => {
	const date = new Date()
	let h = date.getHours()
	const m = h >= 12 ? 'PM' : 'AM'

	const greeting = getGreeting(h)
	greetingElement.innerText = greeting

	setTimeout((meridian.parentElement.style.opacity = 0), 300)

	if (mode === 12) {
		h = h % 12 || 12
		setTimeout((meridian.parentElement.style.opacity = 1), 300)
	}

	if (greeting === 'Evening') {
		body.style.backgroundImage = 'url("assets/night.webp")'
	} else {
		body.style.backgroundImage = 'url("assets/day.webp")'
	}

	hours.style.setProperty('--value', h)
	minutes.style.setProperty('--value', date.getMinutes())
	seconds.style.setProperty('--value', date.getSeconds())
	meridian.innerText = m
}

const getGreeting = (h) => {
	if (h >= 5 && h < 12) {
		return 'Morning'
	} else if (h >= 12 && h < 17) {
		return 'Afternoon'
	} else {
		return 'Evening'
	}
}
