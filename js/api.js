// // Введите сюда ссылку на ваш MockAPI ресурс
// const apiUrl = 'https://672b0d95976a834dd025652d.mockapi.io/Place-1';

// async function fetchData() {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     // Обработка данных (например, отображение на странице)
//     console.log(data);  //  Или используйте другую функцию для отображения данных
//   } catch (error) {
//     console.error("Ошибка при загрузке данных:", error);
//   }
// }

// fetchData();






// async function getResponse(page) {
//     const response = await fetch('https://672b0d95976a834dd025652d.mockapi.io/Place-1');
//     const content = await response.json();
//     const startIndex = (page -1) * 10;
//     const endIndex = startIndex + 10;
//     const slicedContent = content.slice(startIndex, endIndex);
    
//     const list = document.querySelector('.content-items');
//     list.innerHTML = ''; // Clear previous content
//     slicedContent.forEach(item => {
//         list.innerHTML += `
//         <div class="content-item">
//             <img class="content__img" ${item.image}" alt="${item.title}>
//             <div class="content__sub">
//                 <h1 class="content__title">${item.title}</h1>
//                 <p class="content__text">${item.text}</p>
//                 <p class="content__address">${item.address}</p>
//                 <a class="content__link" href="#">Перейти</a>
//             </div>
//         </div>`;
//     });
// }


// getResponse(currentPage);
//     updateActiveButtonStates();
// const mask = document.querySelector('.mask');















const apiUrl = 'https://672b0d95976a834dd025652d.mockapi.io/Place-1';
let currentPage = 1; // Define currentPage globally
const itemsPerPage = 10; // Or however many items you want per page

async function fetchData(page = currentPage) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayItems(page, data);  // Call displayItems to update the content
    updatePagination(data); // Call updatePagination (make sure it's defined/imported)
  } catch (error) {
    console.error("Error fetching data:", error);
    // Add error handling to display a message in the UI.
  }
}

function displayItems(page, data) {
    const list = document.querySelector('.content-items');  // Correct selector
    list.innerHTML = ''; // Clear existing items

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedContent = data.slice(startIndex, endIndex);


    slicedContent.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('content-item');

      const imgElement = document.createElement('img');
      imgElement.classList.add('content__img');
      imgElement.src = item.photo;       // Correctly set the src attribute
      imgElement.alt = item.title;     // Correct alt attribute
      itemElement.appendChild(imgElement);

      const subDiv = document.createElement('div');
      subDiv.classList.add('content__sub');


      const titleElement = document.createElement('h1');
      titleElement.classList.add('content__title');
      titleElement.textContent = item.title;
      subDiv.appendChild(titleElement);


      const textElement = document.createElement('p');
      textElement.classList.add('content__text');
      textElement.textContent = item.text;
      subDiv.appendChild(textElement);

      const addressElement = document.createElement('p');
      addressElement.classList.add('content__address');
      addressElement.textContent = item.address;
      subDiv.appendChild(addressElement);



      const linkElement = document.createElement('a');
      linkElement.classList.add('content__link');
      linkElement.href = '#';  // Or item.link if the API provides it
      linkElement.textContent = 'Перейти';
      subDiv.appendChild(linkElement);


      itemElement.appendChild(subDiv);
      list.appendChild(itemElement);
    });
}


// Make sure updatePagination is defined in pagi.js and imported/included here
function updatePagination(data) {
const paginationContainer = document.querySelector('.pagination');
paginationContainer.innerHTML = ''; // Clear existing pagination

const totalPages = Math.ceil(data.length / itemsPerPage);

for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.classList.add('pagination__button');
    button.textContent = i;
    button.addEventListener('click', () => {
    currentPage = i;
    fetchData(currentPage);
    });
    if (i === currentPage) {
    button.classList.add('active');
    }
    paginationContainer.appendChild(button);
}


}

fetchData(); // Initial fetch














// In your pagi.js, update the click handler for pagination buttons:


// // Введите сюда ссылку на ваш MockAPI ресурс
// const apiUrl = 'https://672b0d95976a834dd025652d.mockapi.io/Place-1';

// async function fetchData() {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     // Обработка данных (например, отображение на странице)
//     console.log(data);  //  Или используйте другую функцию для отображения данных
//   } catch (error) {
//     console.error("Ошибка при загрузке данных:", error);
//   }
// }

// fetchData();

// async function getResponse(page) {
//     const response = await fetch('https://672b0d95976a834dd025652d.mockapi.io/Place-1');
//     const content = await response.json();
//     const startIndex = (page -1) * 10;
//     const endIndex = startIndex + 10;
//     const slicedContent = content.slice(startIndex, endIndex);

//     const list = document.querySelector('.content-items');
//     list.innerHTML = ''; // Clear previous content
//     slicedContent.forEach(item => {
//         list.innerHTML += `
//         <div class="content-item">
//             <img class="content__img" ${item.image}" alt="${item.title}>
//             <div class="content__sub">
//                 <h1 class="content__title">${item.title}</h1>
//                 <p class="content__text">${item.text}</p>
//                 <p class="content__address">${item.address}</p>
//                 <a class="content__link" href="#">Перейти</a>
//             </div>
//         </div>`;
//     });
// }

// getResponse(currentPage);
//     updateActiveButtonStates();
// const mask = document.querySelector('.mask');



















// const list = document.querySelector('.content-items') // Correct selector
// const apiUrl = 'https://672b0d95976a834dd025652d.mockapi.io/Place-1'
// let currentPage = 1 // Define currentPage globally
// const itemsPerPage = 10 // Or however many items you want per page
// let result = ''

// async function fetchData(page = currentPage) {
//   try {
//     const response = await fetch(apiUrl)
//     const data = await response.json()

//     displayItems(page, data) // Call displayItems to update the content
//     // updatePagination(data) // Call updatePagination (make sure it's defined/imported)
//   } catch (error) {
//     console.error('Error fetching data:', error)
//     // Add error handling to display a message in the UI.
//   }
// }

// function displayItems(page, data) {
//   list.innerHTML = '' // Clear existing items

//   const startIndex = (page - 1) * itemsPerPage
//   const endIndex = Math.min(startIndex + itemsPerPage, data.length)
//   const slicedContent = data.slice(startIndex, endIndex)

//   slicedContent.forEach((item) => {
//     const itemElement = document.createElement('div')
//     itemElement.classList.add('content-item')

//     const imgElement = document.createElement('img')
//     imgElement.classList.add('content__img')
//     imgElement.src = item.photo
//     imgElement.alt = item.title
//     itemElement.appendChild(imgElement)

//     const subDiv = document.createElement('div')
//     subDiv.classList.add('content__sub')

//     const titleElement = document.createElement('h2')
//     titleElement.classList.add('content__title')
//     titleElement.textContent = item.title
//     subDiv.appendChild(titleElement)

//     const textElement = document.createElement('p')
//     textElement.classList.add('content__text')
//     textElement.textContent = item.text
//     subDiv.appendChild(textElement)

//     const addressElement = document.createElement('p')
//     addressElement.classList.add('content__address')
//     addressElement.textContent = item.address
//     subDiv.appendChild(addressElement)

//     const linkElement = document.createElement('a')
//     linkElement.classList.add('content__link')
//     linkElement.href = '#' // Or item.link if the API provides it
//     linkElement.textContent = 'Перейти'
//     subDiv.appendChild(linkElement)

//     itemElement.appendChild(subDiv)
//     list.appendChild(itemElement)
//   })
// }
