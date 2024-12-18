document.addEventListener('DOMContentLoaded', () => {
    const sortModal = document.getElementById('sort'); // Модальное окно
    const sortOpenButton = document.getElementById('sort-open'); // Кнопка для открытия/закрытия модального окна
    const sortButtons = document.querySelectorAll('.content__link'); // Кнопки сортировки
    const contentItems = document.querySelector('.content-items'); // Контейнер для элементов
    const mask = document.querySelector('.mask'); // Лоадер

    // Функция для загрузки данных с сервера
    async function fetchData() {
        const url = `https://672b0d95976a834dd025652d.mockapi.io/Place-1`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    // Функция для отображения данных
    function displayItems(data) {
        contentItems.innerHTML = ''; // Очищаем контейнер
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('content-item');
            itemElement.innerHTML = `
                <img class="content__img" src="${item.photo}" alt="${item.title}">
                <div class="content__sub">
                    <h2 class="content__title">${item.title}</h2>
                    <p class="content__text">${item.text}</p>
                    <p class="content__address">${item.address}</p>                
                    <a class="content__link" href="#">Перейти</a>
                </div>
            `;
            contentItems.appendChild(itemElement);
        });
    }

    // Функция для сортировки данных
    function sortData(data, order) {
        return data.sort((a, b) => {
            if (order === 'asc') {
                return a.title.localeCompare(b.title); // По алфавиту (А-Я)
            } else {
                return b.title.localeCompare(a.title); // По алфавиту (Я-А)
            }
        });
    }

    // Обработчик событий для кнопок сортировки
    sortButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const sortOrder = button.textContent.includes('А-Я') ? 'asc' : 'desc'; // Определяем порядок сортировки

            // Показываем лоадер
            mask.classList.remove('hide');
            mask.classList.add('active');

            // Загружаем и сортируем данные
            const data = await fetchData();
            const sortedData = sortData(data, sortOrder);

            // Скрываем лоадер
            mask.classList.remove('active');
            mask.classList.add('hide');

            // Отображаем отсортированные данные
            displayItems(sortedData);

            // Закрываем модальное окно
            sortModal.style.display = 'none';
        });
    });

    // Обработчик событий для кнопки открытия/закрытия модального окна
    sortOpenButton.addEventListener('click', () => {
        if (sortModal.style.display === 'flex') {
            sortModal.style.display = 'none'; // Закрываем модальное окно
        } else {
            sortModal.style.display = 'flex'; // Открываем модальное окно
        }
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === sortModal) {
            sortModal.style.display = 'none'; // Закрываем модальное окно
        }
    });
});