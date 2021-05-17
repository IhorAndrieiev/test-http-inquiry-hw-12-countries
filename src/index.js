import './css/common.css';
import countryCard from './templates/articles.hbs';
import API from './js/api-servise';
import getRefs from './js/get-refs';

const refs = getRefs();

refs.searchFofm.addEventListener('submit', OnSearch);


      
function OnSearch(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const searchQuery = form.elements.query.value; //searchQuery callback countryName

    API.fetchCountriesByNames(searchQuery)
        .then(renderCountriesCard)
        .catch(onFetchError)
        .finally(() => form.reset());
};



    function renderCountriesCard(countrys) {
        // const markup = countryCard(country);
        refs.cardContainer.insertAdjacentHTML('beforeend', countryCard(countrys));
    }

     function onFetchError(error) {
         alert('no')
     } 