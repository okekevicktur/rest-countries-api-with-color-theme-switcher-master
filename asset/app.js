const apiUrl = "https://restcountries.com/v3.1/all";
const search = document.getElementById("searchicon");

const countryFlag= document.getElementById("country-flag");
const countryName= document.getElementById("name");
const population= document.getElementById("population");
const capital= document.getElementById("capital");
const countries = document.querySelector(".countries");

 // slizedArray.forEach(slicey => {
    // countryFlag.setAttribute('src', `${slizedArray[0].flags.svg}`);
    // countryName.innerText=`${slizedArray[0].name.common}`;
    // population.innerText=`${slizedArray[0].population}`;
    // capital.innerText=`${slizedArray[0].capital[0]}`;


async function getapi(url){
        //storing response 
    // try {
            const response = await fetch(`${url}`);
            if (response.ok) {
                //storing data in form of JSon
                var data = await response.json();
                const slizedArray = data.slice(1,25);
               

                for (let i = 0; i < slizedArray.length; i++) {
                    var Countryframe= document.createElement('div');
                    Countryframe.className ="country";

                    var cardWrap = document.createElement('div');
                    cardWrap.className= "imgwrap";
                    //img element
                    var card = document.createElement('img');
                    card.className= "country-flag";
                    card.src =`${slizedArray[i].flags.png}`;
                    
                    //country details Container
                    var detailsWrap = document.createElement('div');
                    detailsWrap.className = "country-details";
                    //Children
                    var name = document.createElement('p');
                    name.className= "name";
                    name.innerText  = `${slizedArray[i].name.common}`;
                    //population
                    var population = document.createElement('p');
                    population.className= "population";
                    population.innerText  = `${slizedArray[i].population}`;
                    //capital
                    var capital = document.createElement('p');
                    capital.className= "capital";
                    capital.innerText  = `${slizedArray[i].capital[0]}`;

                    // append child
                    detailsWrap.appendChild(name); 
                    detailsWrap.appendChild(population);
                    detailsWrap.appendChild(capital);
                    cardWrap.appendChild(card);
                    Countryframe.appendChild(cardWrap);
                    Countryframe.appendChild(detailsWrap);
                    countries.appendChild(Countryframe);

                }
            }
            else{
            alert("word not available");
            
            }
    
    // } catch (error) {
    //     alert("Opps... it's hard getting the meaning");       
    // }     
} 

search.addEventListener('click', function(){
    console.log('clicked');
    getapi(apiUrl);
});
   

