const rateList = document.querySelector('.rates__items');

export async function fetchRewiews() {
    try{
        const response = await fetch('https://672b0d95976a834dd025652d.mockapi.io/Rates-1');
        const data = await response.json();
        // console.log(data)
        displayRates(data);
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    } finally {
        mask.classList.replace('active', 'hide');
    }
}

export async function displayRates(data) {
    rateList.innerHTML = '';
    let contentHTML = "";

    data.forEach(item => {
        contentHTML += `
            <div class="rates__rate">
                <h2 class="rates__name">${item.name}</h2>
                <p class="rates__content">${item.content}</p>
            </div>
        `;
    });
    rateList.innerHTML = contentHTML;
}

fetchRewiews()