const list = document.querySelector('.content-items') 
const apiUrl = 'https://672b0d95976a834dd025652d.mockapi.io/Place-1'
let currentPage = 1 
const itemsPerPage = 10 

export let res = []

export async function fetchData(page = currentPage) {
		const response = await fetch(apiUrl)
		res = await response.json()
		displayItems(page, res) 
}

async function displayItems(page, data) {
	list.innerHTML = '' 

	const startIndex = (page - 1) * itemsPerPage
	const endIndex = Math.min(startIndex + itemsPerPage, data.length)
	const slicedContent = data.slice(startIndex, endIndex)

	slicedContent.forEach((item) => {
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

fetchData() // Initial fetch


