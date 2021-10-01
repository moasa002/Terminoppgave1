

function getData (){
    //Jeg henter data fra Tv2 sport
    fetch("https://www.tv2.no/live/fotball?dato=2021-09-27", {
        "method" : "GET",
        "headers": {
            "x-rapidapi-host": "tv2.no"
        }
    })
    .then(response => response.json().then(data =>{
        console.log(response);
}
}