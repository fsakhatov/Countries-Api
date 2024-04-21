const countryElem = document.querySelector('.countries');
const dropDown = document.querySelector('.dropDown');
const dropElem = document.querySelector('.drop')
const region = document.querySelectorAll('.region');
const search = document.querySelector('.searchInput');


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
   <h5>${data.name.common}</h5>
   <p><strong>Population: </strong>${data.population.toLocaleString()}</p>
   <p class="regionName"><strong>Region: </strong>${data.region}</p>
   <p><strong>Capital: </strong>${data.capital}</p>
</div>`
countryElem.appendChild(country)
}
dropDown.addEventListener('click', () => {
   dropElem.classList.toggle('showDropDown')
})

const regionName = document.getElementsByClassName('regionName');
region.forEach(element => {
    element.addEventListener('click', () => {
            Array.from(regionName).forEach(elem => {
            if( elem.innerText.includes(element.innerText) || element.innerText == 'All' ){
                elem.parentElement.parentElement.style.display = 'grid'
            }
            else{
                elem.parentElement.parentElement.style.display = 'none' 
            }
            })
        })
    })
    search.addEventListener('input', () => {
   console.log(search.value);
    })