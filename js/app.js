//getting all the mobile phones
const allMobiles = () => {
    const searchField = document.getElementById('search-box');
    const searchValue = searchField.value;
    searchField.value = "";
    if (searchValue == "") {
        document.getElementById('mobile-container').innerHTML = `
        <h2 class="text-danger text-center mr-10">Please Search Something!</h2>
        `;
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
        fetch(url)
            .then(response => response.json())
            .then(datas => showMobiles(datas.data))
    }

}

//showing 20 mobile phones
const showMobiles = (results) => {
    let mobiles = results.slice(0, 20);
    const parent = document.getElementById('mobile-container');
    parent.textContent = "";
    document.getElementById('mobile-detail-container').textContent = "";
    if (mobiles.length == 0) {
        parent.innerHTML = `           
        <h2 class="text-danger">No Results Found!</h2 >     
        `;
    }
    else {
        for (const mobile of mobiles) {
            const div = document.createElement('div');
            div.classList.add('card');
            div.classList.add('rounded');
            div.classList.add('shadow-lg');
            div.classList.add('my-5');
            div.classList.add('h-100');
            div.classList.add('text-center');
            div.innerHTML = `
        <div class="">
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
    const parent = document.getElementById('mobile-detail-container');
    parent.textContent = "";
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('h-100');
    div.classList.add('text-center');
    if (detail.releaseDate == '') {
        detail.releaseDate = "To Be Announced(TBA)";
    }
    div.innerHTML = `   
                    <div class="border">  
                    <img src="${detail.image}" class="card-img-top w-auto h-auto" alt="...">
                    <h5 class="card-title mt-2">Name: ${detail.name}</h5>
                    <h5 class="card-title mt-2">Release Date: ${detail.releaseDate}</h5>
                    <h5 class="card-title mt-2">Main Features</h5>
                    <h6 class="card-title mt-2">Storage: ${detail.mainFeatures.storage}</h6>
                    <h6 class="card-title mt-2">Display Size: ${detail.mainFeatures.displaySize}</h6>
                    <h6 class="card-title mt-2">Chip Set: ${detail.mainFeatures.chipSet}</h6>
                    <h6 class="card-title mt-2">Memory Size: ${detail.mainFeatures.memory}</h6>
                    <h6 class="card-title mt-2">Sensors: ${detail.mainFeatures.sensors.toString()}</h6>
                    <h5 class="card-title mt-2">Others</h5>
                    <h6 class="card-title mt-2">WLAN: ${detail.others.WLAN}</h6>
                    <h6 class="card-title mt-2">Bluetooth: ${detail.others.Bluetooth}</h6>
                    <h6 class="card-title mt-2">GPS: ${detail.others.GPS}</h6>
                    <h6 class="card-title mt-2">NFC: ${detail.others.NFC}</h6>
                    <h6 class="card-title mt-2">Radio: ${detail.others.Radio}</h6>
                    <h6 class="card-title mt-2">USB: ${detail.others.USB}</h6>
                    `
    parent.appendChild(div);
    window.scrollTo(0, 0);
}
