import { fetchData, res } from './api.js'

const list = document.querySelector('.content-items')
const searchInput = document.querySelector('.select__search')
const contentContainer = document.querySelector('.content')
let noResultsMessageElement = null

searchInput.addEventListener('input', () => {
	const searchTerm = searchInput.value.toLowerCase()

	if (Array.isArray(res)) {
		const filteredItems = res.filter((item) => {
			const title = item.title.toLowerCase()
			return title.includes(searchTerm)
		})

		displayFilteredItems(filteredItems)
	}
})

function displayFilteredItems(filteredItems) {
	list.innerHTML = ''
	if (filteredItems.length === 0) {
		displayNoResultsMessage()
		return
	} else {
		list.style.display = 'grid'
	}
	if (noResultsMessageElement) {
		noResultsMessageElement.remove()
		noResultsMessageElement = null
	}
	filteredItems.forEach((item) => {
		const itemElement = document.createElement('div')
		itemElement.classList.add('content-item')

		const imgElement = document.createElement('img')
		imgElement.classList.add('content__img')
		imgElement.src = item.photo
		imgElement.alt = item.title
		itemElement.appendChild(imgElement)

		const subDiv = document.createElement('div')
		subDiv.classList.add('content__sub')

		const titleElement = document.createElement('h2')
		titleElement.classList.add('content__title')
		titleElement.textContent = item.title
		subDiv.appendChild(titleElement)

		const textElement = document.createElement('p')
		textElement.classList.add('content__text')
		textElement.textContent = item.text
		subDiv.appendChild(textElement)

		const addressElement = document.createElement('p')
		addressElement.classList.add('content__address')
		addressElement.textContent = item.address
		subDiv.appendChild(addressElement)

		const linkElement = document.createElement('a')
		linkElement.classList.add('content__link')
		linkElement.href = '#'
		linkElement.textContent = 'Перейти'
		subDiv.appendChild(linkElement)

		itemElement.appendChild(subDiv)
		list.appendChild(itemElement)
	})
}

function displayNoResultsMessage() {
	if (!noResultsMessageElement) {
		noResultsMessageElement = document.createElement('p')
		noResultsMessageElement.classList.add('content__none')
		noResultsMessageElement.textContent = 'Ничего не найдено'
		noResultsMessageElement.style.display = 'block'

		list.style.display = 'none'
		contentContainer.appendChild(noResultsMessageElement)
	}
}

fetchData()
