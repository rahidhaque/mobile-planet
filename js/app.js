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
        console.log(mobile);
        const parent = document.getElementById('mobile-container');
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('h-100');
        div.innerHTML = `                    
                    <img src="${mobile.image}" class="card-img-top w-50" alt="...">
                    <div class="card-body m-5">
                        <h5 class="card-title">Phone Name:</h5>
                        <p class="card-text">${mobile.phone_name}</p>
                        <h5 class="card-title">Brand Name:</h5>
                        <p class="card-text">${mobile.brand}</p>
                    </div>
                    </div>
        `;
        parent.appendChild(div);
    }
}
