const apiUrl = "https://restcountries.com/v3.1/all";
const search = document.getElementById("searchicon");

const countryFlag= document.getElementById("country-flag");
const countryName= document.getElementById("name");
const population= document.getElementById("population");
const capital= document.getElementById("capital");


async function getapi(url){
        //storing response 
    try {
            const response = await fetch(`${url}`);
            if (response.ok) {
                //storing data in form of JSon
                var data = await response.json();
                // const element = data;
                // console.log(element);
                const slizedArray = data.slice(0,8);
                //console.log(slizedArray);
                // slizedArray.forEach(slicey => {
                countryFlag.setAttribute('src', `${slizedArray[0].flags.svg}`);
                // console.log(slizedArray[0].flags.svg)
                countryName.innerText=`${slizedArray[0].name.common}`;
                // console.log(slizedArray[0].name.common)
                population.innerText=`${slizedArray[0].population}`;
                // console.log(slizedArray[0].population)
                // console.log(slizedArray[0].capital[0]);
                capital.innerText=`${slizedArray[0].capital[0]}`;

                // });
            }
            else{
            alert("word not available");
            
            }
    
    } catch (error) {
        alert("Opps... it's hard getting the meaning");       
    }     
} 

search.addEventListener('click', function(){
    console.log('clicked');
    getapi(apiUrl);
});
   

