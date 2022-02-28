//getting all the mobile phones
const allMobiles = () => {
    const searchField = document.getElementById('search-box');
    const searchValue = searchField.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
        .then(response => response.json())
        .then(datas => showMobiles(datas.data))
}

//showing all the mobile phones
const showMobiles = (mobiles) => {
    for (const mobile of mobiles) {
        const parent = document.getElementById('mobile-container');
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('h-100');
        div.innerHTML = `   
                    <div class="border">                 
                    <img src="${mobile.image}" class="card-img-top w-50" alt="...">
                    <div class="card-body m-5">
                        <h5 class="card-title">Phone Name:</h5>
                        <p class="card-text">${mobile.phone_name}</p>
                        <h5 class="card-title">Brand Name:</h5>
                        <p class="card-text">${mobile.brand}</p>
                        <button onclick="mobileDetails('${mobile.slug}')" class="btn btn-success">Details</button>
                    </div>
                    </div>
        `;
        parent.appendChild(div);
    }
}
const mobileDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(datas => displayMobileDetails(datas.data))
}

const displayMobileDetails = (details) => {

}
