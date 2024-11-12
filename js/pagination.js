const searchInput = document.querySelector('.select__search');
const contentItemsContainer = document.querySelector('.content-items');
const paginationContainer = document.querySelector('.pagination');
const itemsPerPage = 3;
let currentPage = 1;

// Функция для отображения элементов на текущей странице
function displayItems(items) {
  contentItemsContainer.innerHTML = '';

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  displayedItems.forEach(item => {
    contentItemsContainer.appendChild(item);
  });
}

// Функция для создания кнопок пагинации
function setupPagination(items) {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  paginationContainer.innerHTML = '';

    if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', () => {
        currentPage = i;
        filterAndDisplayItems();
      });
      paginationContainer.appendChild(button);
    }
  }
}

// Функция для фильтрации и отображения элементов
function filterAndDisplayItems() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredItems = Array.from(document.querySelectorAll('.content-item')).filter(item => {
    const title = item.querySelector('.content__title')?.textContent.toLowerCase() || '';
    const subtitle = item.querySelector('.content__subtitle')?.textContent.toLowerCase() || '';
    return title.includes(searchTerm) || subtitle.includes(searchTerm);
  });

  setupPagination(filteredItems);
  displayItems(filteredItems);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  filterAndDisplayItems();
});

// Обновление при поиске
searchInput.addEventListener('input', filterAndDisplayItems);
