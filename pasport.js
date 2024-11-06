
document.getElementById('translateButton').addEventListener('click', function() {
    const issuedText = document.getElementById('issued');
    const surnameText = document.getElementById('surname');
    const nameText = document.getElementById('name');
    const patronymicText = document.getElementById('father');
    const genderText = document.getElementById('gender');
    const birthplaceText = document.getElementById('birthplace');

    if (issuedText.innerText === 'ГУ МВД РОССИИ ПО Г.МОСКВЕ') {
        issuedText.innerText = 'GU MVD ROSSII IN MOSCOW';
        surnameText.innerText = 'Gazizova';
        nameText.innerText = 'Bella';
        patronymicText.innerText = 'Radikovna';
        genderText.innerText = 'Female';
        birthplaceText.innerText = 'c.Moscow';
    } else {
        issuedText.innerText = 'ГУ МВД РОССИИ ПО Г.МОСКВЕ';
        surnameText.innerText = 'Газизова';
        nameText.innerText = 'Белла';
        patronymicText.innerText = 'Радиковна';
        genderText.innerText = 'Жен';
        birthplaceText.innerText = 'г.Москва';
    }
});
document.getElementById('getInfoButton').addEventListener('click', function() {
    // Считываем информацию из DOM
    var lastName = document.getElementById('lastName').innerText;
    var firstName = document.getElementById('firstName').innerText;
    var birthYear = document.getElementById('birthYear').innerText;

    // Отображаем информацию в div
    var infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `<strong>Считанная информация:</strong><br>
                         Фамилия: ${lastName}<br>
                         Имя: ${firstName}<br>
                         Год рождения: ${birthYear}`;
});