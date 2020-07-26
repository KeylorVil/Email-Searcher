document.querySelector('#searchBtn').addEventListener("click", function () {
    let email = document.querySelector('#emailInput').value;
    if (email !== '') {
        window.location.href = '/result?search=' + email;
    }
});