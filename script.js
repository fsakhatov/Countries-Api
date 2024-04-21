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
    let input = document.querySelector('input');
    let dropDownCon = document.querySelector('.dropDownCon')
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    moon.classList.toggle('moons')
    input.classList.toggle('active')
    toggle.classList.toggle('active')
    dropDownCon.classList.toggle('active');
    dropDown.classList.toggle('active')
    dropElem.classList.toggle('active2')
})
