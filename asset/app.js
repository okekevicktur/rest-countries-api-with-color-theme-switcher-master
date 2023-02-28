const apiUrl = 'https://restcountries.com/v3.1';
const search = document.getElementById("searchicon");
 // https://restcountries.com/v3.1/name/{name}
const countryFlag= document.getElementById("country-flag");
const countryName= document.getElementById("name");
const population= document.getElementById("population");
const capital= document.getElementById("capital");
const countries = document.getElementById("countries");
const searchTextbox = document.getElementById("search");
const dyCountries = document.querySelectorAll('.country');
const selectElement = document.querySelector('#filter');
const Mode = document.getElementById("mode");
const wholeDocument = document.body;
 // slizedArray.forEach(slicey => {
    // countryFlag.setAttribute('src', `${slizedArray[0].flags.svg}`);
    // countryName.innerText=`${slizedArray[0].name.common}`;
    // population.innerText=`${slizedArray[0].population}`;
    // capital.innerText=`${slizedArray[0].capital[0]}`;

window.addEventListener('load', getapi(apiUrl));

// {/* <input type="button" value="Go to page" onclick="location.href='mypage.html'"/>
// Anyway u can try:

// onClick: function () {
//                 location.href("about.html");
//                } */}


// aCountry.addEventListener('click', function(){
//     let aCountry = document.querySelector('.country').querySelector('.country-details').querySelector('.name');
//     console.log(ac)
// });

function mode(){
    if (Mode.innerText === "Dark Mode"){
        document.getElementById('lightMoon').style.display = "none";
        document.getElementById('darkMoon').style.display = "inline-block";
        wholeDocument.style.backgroundColor = "hsl(207, 26%, 17%)";
        wholeDocument.style.color = "hsl(0, 0%, 100%)";
        document.getElementById('header').style.backgroundColor = "hsl(209, 23%, 22%)";
        let allCountries = document.querySelectorAll('.country')
        allCountries.forEach(dycountry =>{
            dycountry.style.color = "hsl(209, 23%, 22%)";
        });
        // document.querySelector('.country-details').style.color = "hsl(209, 23%, 22%)";
        Mode.innerText = "Light Mode";

    }else{
        document.getElementById('lightMoon').style.display = "inline-block";
        document.getElementById('darkMoon').style.display = "none";
        wholeDocument.style.backgroundColor = "hsl(0, 0%, 98%)";
        wholeDocument.style.color = "hsl(200, 15%, 8%)";
        document.getElementById('header').style.backgroundColor = "hsl(0, 0%, 100%)";
        // document.querySelector('.country-details').style.color = "hsl(200, 15%, 8%)";
        Mode.innerText = "Dark Mode";
    }
}
Mode.addEventListener('click', function(){
    mode();
});

async function fetchAll(url, event){
    const response = await fetch(`${url}/all`);
    if (response.ok) {
        //storing data in form of JSon
        var regionArray = await response.json();
        
    var slizedArray = [];
   
    regionArray.forEach(county => {  
        if(county.region === `${event.target.value}`){
            slizedArray.push(county);
            
        }
    });
        if(slizedArray.length >0 ){
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
            mode();
        }
        else{
            alert("No country is available in this region");
            getapi(apiUrl);
        }
       
    }
}
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
                mode();
            }
            else{
                alert("country not available");
                mode();
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
            mode();
        }
        else{
             alert("word not available");
             getapi(url);
             mode();
        }

// } catch (error) {
//     alert("Opps... it's hard getting the meaning");       
// }     
} 

function deleteCountry(){
    let allCountries = document.querySelectorAll('.country');
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

selectElement.addEventListener('change', (event) => {
    let newRegion=  `${event.target.value}`;
    
    if (newRegion === "") {
        alert("you can search based on region");
        getapi(apiUrl);
    }else{
        // console.log("trying to delete");
        deleteCountry();
        fetchAll(apiUrl, event);    
    }
    
    
  });






   

