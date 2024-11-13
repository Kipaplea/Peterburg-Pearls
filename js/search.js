const searchInput = document.querySelector('.select__search');
const contentItems = document.querySelectorAll('.content-item');
const contentContainer = document.querySelector('.content');
let noResultsMessageElement = null;

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

  if (searchTerm === '') {
    contentItems.forEach(item => {
      item.style.display = 'block';
    });
  }

  const visibleItems = Array.from(contentItems).filter(item => item.style.display !== 'none');
  if (visibleItems.length === 0) {
    if (!noResultsMessageElement) {
      noResultsMessageElement = document.createElement('p');
      noResultsMessageElement.classList.add('content__none');
      noResultsMessageElement.textContent = 'Ничего не найдено';
      contentContainer.appendChild(noResultsMessageElement);
    }
  } else {
    if (noResultsMessageElement) {
      contentContainer.removeChild(noResultsMessageElement);
      noResultsMessageElement = null;
    }
  }
});










// const searchInput = document.querySelector('.select__search');
// const contentItems = document.querySelectorAll('.content-item');
// const contentContainer = document.querySelector('.content'); // Предполагаем, что у вас есть контейнер для .content-item

// searchInput.addEventListener('input', () => {
//   const searchTerm = searchInput.value.toLowerCase();

//   if (searchTerm === 'test') {
//     // Скрываем все блоки
//     contentItems.forEach(item => {
//       item.style.display = 'none';
//     });

//     // Создаем новый элемент для изображения
//     const imageElement = document.createElement('img');
//     imageElement.src = './img/test.png'; // Замените на ваш путь
//     imageElement.classList.add('content__test'); // Добавьте класс для стилизации (опционально)

//     // Добавляем изображение в контейнер
//     contentContainer.appendChild(imageElement);
//   } else {
//     // Если searchTerm не "text", то работаем как раньше
//     contentItems.forEach(item => {
//       const title = item.querySelector('.content__title')?.textContent.toLowerCase() || '';
//       const subtitle = item.querySelector('.content__subtitle')?.textContent.toLowerCase() || '';

//       if (title.includes(searchTerm) || subtitle.includes(searchTerm)) {
//         item.style.display = 'block';
//       } else {
//         item.style.display = 'none';
//       }
//     });

//     // Удаляем изображение, если оно было добавлено ранее
//     const existingImage = contentContainer.querySelector('.content__test');
//     if (existingImage) {
//       contentContainer.removeChild(existingImage);
//     }
//   }
// });
