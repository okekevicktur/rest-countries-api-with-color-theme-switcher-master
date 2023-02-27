const apiUrl = 'https://restcountries.com/v3.1';
const search = document.getElementById("searchicon");
 // https://restcountries.com/v3.1/name/{name}
const countryFlag= document.getElementById("country-flag");
const countryName= document.getElementById("name");
const population= document.getElementById("population");
const capital= document.getElementById("capital");
const countries = document.getElementById("countries");
const searchTextbox = document.getElementById("search");
const dyCountries = document.querySelectorAll('.country')
 // slizedArray.forEach(slicey => {
    // countryFlag.setAttribute('src', `${slizedArray[0].flags.svg}`);
    // countryName.innerText=`${slizedArray[0].name.common}`;
    // population.innerText=`${slizedArray[0].population}`;
    // capital.innerText=`${slizedArray[0].capital[0]}`;

window.addEventListener('load', getapi(apiUrl));

async function getapi(url){
        //storing response 
    // try {
            const response = await fetch(`${url}/all`);
            if (response.ok) {
                //storing data in form of JSon
                var slizedArray = await response.json();
                // const slizedArray = data.slice(1,200);
               

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
                    population.innerText  = `Population: ${slizedArray[i].population}`;
                    //region
                    var region = document.createElement('p');
                    region.className= "region";
                    region.innerText  = `Region: ${slizedArray[i].region}`;
                    
                    //capital
                    var capital = document.createElement('p');
                    capital.className= "capital";
                    capital.innerText  = `Capital: ${slizedArray[i].capital}`;

                    // append child
                    detailsWrap.appendChild(name); 
                    detailsWrap.appendChild(population);
                    detailsWrap.appendChild(region);
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
async function getCountry(url,countryName){
    //storing response 
// try {
        const response = await fetch(`${url}/name/${countryName}`);
        if (response.ok) {
            //storing data in form of JSon
            var slizedArray = await response.json();
            // const slizedArray = data.slice(1,200);
                
            // countries.removeChild(dyCountries);
           

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
                population.innerText  = `Population: ${slizedArray[i].population}`;
                //region
                var region = document.createElement('p');
                region.className= "region";
                region.innerText  = `Region: ${slizedArray[i].region}`;
                
                //capital
                var capital = document.createElement('p');
                capital.className= "capital";
                capital.innerText  = `Capital: ${slizedArray[i].capital[0]}`;

                // append child
                detailsWrap.appendChild(name); 
                detailsWrap.appendChild(population);
                detailsWrap.appendChild(region);
                detailsWrap.appendChild(capital);
                cardWrap.appendChild(card);
                Countryframe.appendChild(cardWrap);
                Countryframe.appendChild(detailsWrap);
                countries.appendChild(Countryframe);

            }
        }
        else{
             alert("word not available");
             getapi(url);
        }

// } catch (error) {
//     alert("Opps... it's hard getting the meaning");       
// }     
} 

function deleteCountry(){
    let allCountries = document.querySelectorAll('.country')
    allCountries.forEach(dycountry =>{
        dycountry.remove();
    });
}

search.addEventListener('click', function(){
    let newCountry=  searchTextbox.value;
    
    if (newCountry === "") {
        alert("type a country name to search");
    }else{
        // console.log("trying to delete");
        deleteCountry();
        getCountry(apiUrl,newCountry);      
    }
});

searchTextbox.addEventListener('keypress',function(e){

    if(e.key === "Enter") {
        search.click();
    }
});


   

