const countryElem = document.querySelector('.countries');
const dropDown = document.querySelector('.dropDown');
const dropElem = document.querySelector('.drop')
const region = document.querySelectorAll('.region');
const search = document.querySelector('.searchInput');
const toggle = document.querySelector('.toggle');
let moon = document.querySelector('.moon');


async function getCountry(){
    const url = await fetch("https://restcountries.com/v3.1/all?fields")
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element)
    });
}
getCountry()
function showCountry(data){
   const country = document.createElement('div');
   country.classList.add("country");
   country.innerHTML = `
   <div class="country-img">
   <img src="${data.flags.svg}" alt="">
</div>
<div class="country-info">
   <h5 class="countryName">${data.name.common}</h5>
   <p><strong>Population: </strong>${data.population.toLocaleString()}</p>
   <p class="regionName"><strong>Region: </strong>${data.region}</p>
   <p><strong>Capital: </strong>${data.capital}</p>
</div>`
countryElem.appendChild(country)
country.addEventListener('click', () => {
    showCountryDetail(data)
})
}
dropDown.addEventListener('click', () => {
   dropElem.classList.toggle('showDropDown');
})

const regionName = document.getElementsByClassName('regionName');
const countryName = document.getElementsByClassName('countryName')
region.forEach(element => {
    element.addEventListener('click', () => {
            Array.from(regionName).forEach(elem => {
            if( elem.innerText.includes(element.innerText) || element.innerText == 'All' ){
                elem.parentElement.parentElement.style.display = 'grid';
            }
            else{
                elem.parentElement.parentElement.style.display = 'none' 
            }
            })
        })
    })
    search.addEventListener('input', () => {
        Array.from(countryName).forEach(elem => {
            if( elem.innerText.toLowerCase().includes(search.value.toLowerCase()) ){
                elem.parentElement.parentElement.style.display = 'grid'
            }
            else{
                elem.parentElement.parentElement.style.display = 'none' 
            }
            })
    })
    let country2 = document.querySelector('.country')
    let input = document.querySelector('input');
    let countryInfo = document.querySelector('.country-info');
    let dropDownCon = document.querySelector('.dropDownCon')
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    moon.classList.toggle('moons');
    input.classList.toggle('active')
    toggle.classList.toggle('active')
    dropDownCon.classList.toggle('active');
    dropDown.classList.toggle('active')
    dropElem.classList.toggle('active2')

})

const countryModal = document.querySelector('.countryModal');
function showCountryDetail(data){
    countryModal.classList.toggle('show')
    countryModal.innerHTML = `
    <button class="back">Back</button>
        <div class="modal">
            <div class="leftModal">
                <img src="${data.flags.svg}" alt="">
            </div>
            <div class="rightModal">
                <h1>${data.name.common}</h1>
                <div class="modalInfo">
                    <div class="innerLeft inner">
                        <p><strong>Native Name: </strong>${data['name']['common']}</p>
                        <p ><strong>Population: </strong>${data.population.toLocaleString()}</p>
                        <p><strong>Region: </strong>${data.region}</p>
                        <p><strong>Sub-region: </strong>${data.subregion}</p>
                    </div>
                    <div class="innerRight inner">
                        <p><strong>Capital: </strong>${data.capital}</p>
                        <p ><strong>Top Level Domain: </strong>${data.tld}</p>
                        <p><strong>Currencies: </strong>${Object.keys(data['currencies'])}</p>
                        <p><strong>Languages: </strong>${Object.values(data['languages'])}</p>
                    </div>
                </div>
            </div>
        </div>`
        const back = countryModal.querySelector('.back');
  back.addEventListener('click', () => {
   countryModal.classList.toggle('show')
})
}
