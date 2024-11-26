const list = document.querySelector('.content-items');
const apiUrl = 'https://672b0d95976a834dd025652d.mockapi.io/Place-1';

const mask = await document.querySelector('.mask');
window.addEventListener('DOMContentLoaded', () => {
    mask.classList.add('active');
});

async function fetchData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayItems(data);
}

async function displayItems(data) {
    list.innerHTML = '';
    let contentHTML = "";

    data.forEach(item => {
        contentHTML += `
            <div class="content-item">
                <img class="content__img" src="${item.photo || 'placeholder.jpg'}" alt="${item.title}">
                <div class="content__sub">
                    <h2 class="content__title">${item.title}</h2>
                    <p class="content__text">${item.text}</p>
                    <p class="content__address">${item.address}</p>
                    <a class="content__link" href="${item.link || '#'}" target="_blank">Перейти</a>
                </div>
            </div>
        `;
    });
    list.innerHTML = contentHTML;
    mask.classList.replace('active', 'hide');
}

fetchData();
