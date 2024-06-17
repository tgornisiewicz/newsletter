const button = document.querySelector('.content__button')
const error = document.querySelector('.content__error')
const input = document.querySelector('.content__input')
const success = document.querySelector('.success')
const content = document.querySelector('.content')
const reloadbutton = document.querySelector('.success__button')

const validation = () => {
	const email = document.querySelector('.content__input').value

	const isValidEmail = email => {
		const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
		return pattern.test(email)
	}

	// Example usage

	if (email == '') {
		error.innerHTML = "Can't be blank"
		input.classList.add('invalid')
	} else if (!isValidEmail(email)) {
		error.innerHTML = 'E-mail address is incorrect'
		input.classList.add('invalid')
	} else {
		error.innerHTML = ''
		input.classList.remove('invalid')
		success.style = 'display: flex;'
		content.style = 'display: none'
	}
}

const pagereload = () => {
	location.reload()
}

button.addEventListener('click', validation)

reloadbutton.addEventListener('click', pagereload)
