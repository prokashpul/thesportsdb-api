// sports api get 

const loadSportsData = async () => {
    try {
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php');
        const data = await response.json();
        displayData(data);
    } catch {
        alert('something wrong')
    }


}
loadSportsData()

const displayData = (sportsData) => {
    console.log(sportsData);
    const sport = document.getElementById('sports');
    sportsData.sports.forEach(data => {
        console.log(data)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                    <div class="card h-100">
                        <img src="${data.strSportThumb}" class="card-img-top" alt="${data.strSport}">
                        <div class="card-body">
                            <h5 class="card-title">${data.strSport}</h5>
                            <img src="${data.strSportIconGreen}" class="" height="20px" width="20px" alt="${data.strSport}"><em> ${data.strFormat}</em>
                            <p class="card-text mt-2">${data.strSportDescription.slice(0,100)}</p>
                        </div>
                    </div>
        `
        sport.appendChild(div)
    })
}

// page loading

const pageLoad = () => {
    const load = document.getElementById('loading');
    window.addEventListener('load', () => {
        load.style.display = "none";
    })
}
pageLoad()