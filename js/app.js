//getting all the mobile phones
const allMobiles = () => {
    const searchField = document.getElementById('search-box');
    const searchValue = searchField.value;
    searchField.value = "";
    if (searchValue == "") {
        document.getElementById('mobile-container').innerHTML = `
        <h2 class="text-danger text-center">Please Search Something!</h2>
        `;
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
        fetch(url)
            .then(response => response.json())
            .then(datas => showMobiles(datas.data))
    }
}

//showing all the mobile phones
const showMobiles = (mobiles) => {
    const parent = document.getElementById('mobile-container');
    parent.textContent = "";
    if (mobiles.length == 0) {
        parent.innerHTML = `<h2 class="text-danger text-center">No Result Found!</h2>`;
    }
    else {
        for (const mobile of mobiles) {
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
}
//fetching mobile informations
const mobileDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(datas => displayMobileDetails(datas.data))
}

//displaying mobile informations
const displayMobileDetails = (detail) => {
    document.getElementById('mobile-container').style.display = "none";
    const parent = document.getElementById('mobile-detail-container');
    parent.textContent = "";
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('h-100');
    div.classList.add('text-center');
    console.log(detail.releaseDate);
    if (detail.releaseDate == '') {
        detail.releaseDate = "To Be Announced(TBA)";
    }
    div.innerHTML = `   
                    <div class="border">  
                    <img src="${detail.image}" class="card-img-top w-auto h-auto" alt="...">
                    < 
                    `
    parent.appendChild(div);
}
