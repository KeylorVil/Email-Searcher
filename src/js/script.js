document.querySelector('#searchBtn').addEventListener("click", function () {
    let email = document.querySelector('#emailInput').value;
    if (email !== '' && validateEmail(email)) {
        document.querySelector('#emailInput').classList.remove('error');
        document.querySelector('#labelInput').style.visibility = 'visible';
        document.querySelector('#errorLabel').style.visibility = 'hidden';
        window.location.href = '/result?search=' + email;
    } else {
        document.querySelector('#emailInput').classList.add('error');
        document.querySelector('#labelInput').style.visibility = 'hidden';
        document.querySelector('#errorLabel').style.visibility = 'visible';
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};