const socket = io();

socket.on('connect', function () {
    console.log("socket conneted");
    let url_string = window.location.href;
    let url = new URL(url_string);
    let email = url.searchParams.get("search");
    if (email !== "" || email !== null || email !== undefined) {
        socket.emit('searchEmail', {
            email
        });
    }
});

socket.on('response', function (response) {
    let data = JSON.parse(response)
    // Create Elements
    let resultDiv = document.createElement('div');
    let iconDiv = document.createElement('div');
    let infoDiv = document.createElement('div');
    let row = document.createElement('div');
    // Set Classes
    resultDiv.classList.add('result');
    infoDiv.classList.add('info');
    iconDiv.classList.add('icon');
    row.classList.add('row');
    // Call functions
    createProfileIcon(iconDiv);
    resultTopInfo(data, infoDiv);
    firstColInfo(data, row);
    secondColInfo(data, row);
    // Append elements
    infoDiv.appendChild(row);
    resultDiv.appendChild(iconDiv);
    resultDiv.appendChild(infoDiv);
    document.querySelector('.main').appendChild(resultDiv);
});

function createProfileIcon(iconDiv) {
    // Create Elements
    let circle = document.createElement('div');
    let img = document.createElement('img');
    img.src = '/src/images/icons/icon_person.png';
    // Append elements
    circle.appendChild(img);
    iconDiv.appendChild(circle);
}

function resultTopInfo(data, infoDiv) {
    // Create Elements
    let nameElem = document.createElement('h2');
    let descriptionElem = document.createElement('p');
    // Dynamic Data
    nameElem.textContent = data.first_name + " " + data.last_name;
    descriptionElem.textContent = data.description;
    // Append elements
    infoDiv.appendChild(nameElem);
    infoDiv.appendChild(descriptionElem);
}

function firstColInfo(data, row) {
    // Create Elements
    let firstCol = document.createElement('div');
    let address = document.createElement('h3');
    let addressElem = document.createElement('p');
    let email = document.createElement('h3');
    let emailElem = document.createElement('p');
    // Set Classes
    firstCol.classList.add('col');
    firstCol.classList.add('first-col');
    // Static data
    address.textContent = "Address";
    email.textContent = "Email";
    // Dynamic Data
    addressElem.textContent = data.address;
    emailElem.textContent = data.email;
    // Append elements
    firstCol.appendChild(address);
    firstCol.appendChild(addressElem);
    firstCol.appendChild(email);
    firstCol.appendChild(emailElem);
    row.appendChild(firstCol);
}

function secondColInfo(data, row) {
    // Create Elements
    let secondCol = document.createElement('div');
    let phoneNumbers = document.createElement('h3');
    let relatives = document.createElement('h3');
    // Set Classes
    secondCol.classList.add('col');
    // Static data
    phoneNumbers.textContent = "PhoneNumbers";
    relatives.textContent = "Relatives";
    // Append elements
    secondCol.appendChild(phoneNumbers);
    row.appendChild(secondCol);
    // Dynamic Data
    for(let i in data.phone_numbers) {
        let span = document.createElement('span');
        span.textContent = data.phone_numbers[i];
        if(parseInt(i) === 0)
            span.classList.add('first-number');
        secondCol.appendChild(span);
    }
    secondCol.appendChild(relatives);
    // Dynamic Data
    for(let i in data.relatives) {
        let span = document.createElement('p');
        span.textContent = data.relatives[i];
        if(parseInt(i) === data.relatives.length-1)
            span.classList.add('last_relative');
        secondCol.appendChild(span);
    }
}