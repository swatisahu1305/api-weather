 async function fetchweather(city){

    try{
let data= await fetch(`https://api.weatherapi.com/v1/current.json?key=f4db9308621f47cd8e382229251101&q=${city}&aqi=yes`)
let res= await data.json();
//  console.log(res)
 weatherdata(res)
    }

    catch(error){
console.log(error);

    }
    
}
let btn=document.querySelector("#btn");
    btn.addEventListener("click",()=>{
        let input=document.querySelector("#search").value
        fetchweather(input);
    });

function weatherdata(res){
 document.querySelector("#location").innerHTML=`<i class="fa-solid fa-location-dot"></i>city:${res.location.name}`;
document.querySelector("#precip").innerHTML=`<i class="fa-solid fa-cloud-sun-rain"></i>precip:${res.current.precip_mm}%`;
document.querySelector("#humidity").innerHTML=`<i class="fa-solid fa-droplet"></i>humidity:${res.current.humidity}mm`;
document.querySelector("#wind").innerHTML=`<i class="fa-solid fa-wind"></i>wind:${res.current.wind_kph}kph`;
document.querySelector("#temp").innerHTML=`${res.current.temp_c}°C <img src="./singlecloud.png" alt="">`;
}





fetchweather();
