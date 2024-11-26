document.addEventListener('DOMContentLoaded', async () => {
    const popularItems = document.querySelector('.popular-items');
    const popular = document.querySelector('.popular');
    const itemsPerPage = 2;
    let currentPage = 0;

    const data = await fetch('https://672b0d95976a834dd025652d.mockapi.io/Place-1').then(res => res.json());
    
    popularItems.innerHTML = data.map(item => `
        <div class="popular-item" style="display: none;">
            <img class="popular__img" src="${item.photo}" alt="${item.title}">
            <div class="popular__sub">
                <h2 class="popular__title">${item.title}</h2>
                <p class="popular__text">${item.text}</p>
                <p class="popular__address">${item.address}</p>                
                <a class="popular__link" href="#">Перейти</a>
            </div>
        </div>
    `).join('');

    const items = popularItems.querySelectorAll('.popular-item');
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');
    popular.append(paginationContainer);

    for (let i = 0; i < totalPages; i++) {
        const button = document.createElement('button');
        button.classList.add('pagination__button');
        button.textContent = i + 1;
        button.addEventListener('click', () => {
            currentPage = i;
            showPage(currentPage);
        });
        paginationContainer.append(button);
    }

    const showPage = (page) => {
        items.forEach((item, index) => {
            item.style.display = (index >= page * itemsPerPage && index < (page + 1) * itemsPerPage) ? 'block' : 'none';
        });
    };

    showPage(currentPage); 
});
