// Данные о собаках
const dogs = [
    {
        breed: "Лабрадор",
        price: "25 000 руб.",
        image: "images/labrador.jpg", // Путь к изображению
        link: "https://www.google.com"
    },
    {
        breed: "Ретривер",
        price: "30 000 руб.",
        image: "images/ретривер.jpg",
        link: "https://www.google.com"
    },
    {
        breed: "Хаски",
        price: "35 000 руб.",
        image: "images/хаски.jpg",
        link: "https://www.google.com"
    },
    {
        breed: "Шпиц",
        price: "20 000 руб.",
        image: "images/spitz.jpeg",
        link: "https://www.google.com"
    },
    {
        breed: "Бульдог",
        price: "40 000 руб.",
        image: "images/bulldog.jpeg",
        link: "https://www.google.com"
    },
    {
        breed: "Мопс",
        price: "22 000 руб.",
        image: "images/mops.jpg",
        link: "https://www.google.com"
    }
];

// Функция для отображения пород на странице
const displayDogs = () => {
    const dogList = document.getElementById('dogList');
    
    dogs.forEach(dog => {
        const dogBlock = document.createElement('div');
        dogBlock.classList.add('dog-block');

        dogBlock.innerHTML = `
            <img src="${dog.image}" alt="${dog.breed}">
            <h3>${dog.breed}</h3>
            <p>Цена: ${dog.price}</p>
            <button onclick="window.location.href='${dog.link}'">В корзину</button>
        `;

        dogList.appendChild(dogBlock);
    });
};

// Вызов функции для отображения собак
displayDogs();
