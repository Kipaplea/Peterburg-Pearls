function createLoader() {
    const loader = document.createElement('div');
    loader.id = 'loader'; // Добавить ID для простого доступа и стилизации
    loader.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Убедитесь, что он находится сверху */
    `;

    const spinner = document.createElement('div');
    spinner.style.cssText = `
    border: 4px solid #f3f3f3; 
    border-top: 4px solid #fc8f64; 
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    `;

    // Add the keyframes for the animation to the page's <head>
    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    `;
    document.head.appendChild(style);


    loader.appendChild(spinner);
    document.body.appendChild(loader);

    return loader;
}

function showLoader() {
    const loader = createLoader(); // Создать загрузчик, если он не существует
}

function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
    loader.remove();
    }
}

// Пример использования: показать загрузчик при загрузке страницы, а затем скрыть его через 3 секунды

window.addEventListener('load', () => {
    showLoader();
    setTimeout(() => {
    hideLoader();
    }, 1250); // Настройте время по мере необходимости
});

// В других скриптах вызывайте showLoader() перед любыми длительными операциями и hideLoader(), когда они будут выполнены



