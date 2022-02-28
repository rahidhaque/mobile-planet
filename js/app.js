//getting all the mobile phones
const allMobiles = () => {
    const searchValue = document.getElementById('search-box');
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data.data))
}

