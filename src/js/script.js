function reqListener() {
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=doesmith@example.com");
oReq.send();