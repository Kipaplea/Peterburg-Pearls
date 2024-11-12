const searchInput = document.querySelector('.select__search');
const contentItems = document.querySelectorAll('.content-item');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  contentItems.forEach(item => {
    const title = item.querySelector('.content__title')?.textContent.toLowerCase() || ''; // Получаем текст заголовка, если он есть
    const subtitle = item.querySelector('.content__subtitle')?.textContent.toLowerCase() || ''; // Получаем текст подзаголовка, если он есть

    if (title.includes(searchTerm) || subtitle.includes(searchTerm)) { // Проверяем и заголовок, и подзаголовок
      item.style.display = 'block'; // Показываем блок, если текст совпадает
    } else {
      item.style.display = 'none'; // Скрываем блок, если текст не совпадает
    }
  });
});
