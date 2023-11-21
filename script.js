let searchB = document.getElementById("searchB")
searchB.addEventListener("click",loadWeather)

let searchInput = document.getElementById("searchInp")
searchInput.addEventListener("input",hideIt)

let predictB = document.getElementById("predict")
predictB.addEventListener("click",displayPanel)

let panel = document.getElementById("panel")

function displayPanel(){
    panel.style="display:flex"
}
window.addEventListener("load",async function(){
    const response = await fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=fedfad0353b44eac877bb867ef618aef")
    const apiData = await response.json()
    console.log(apiData)    
    currentWeather(apiData.city.name)
})
// THis works


function hideIt(){
    predictB.style="display:none"
    panel.style="display:none"
    panel.innerHTML=""
    console.log('************************************************')
}

let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box34 = document.getElementById("box34")
async function currentWeather(currentCity){
    box2.style="background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);"
    box34.style="background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);"

    console.log(currentCity)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=42d28598d8498ed311b177ab7b170f2b`)
    const apiData = await response.json()
    console.log(apiData)

    let city = apiData.name
    let country = apiData.sys.country
    console.log(city+", "+country)

    let weather = apiData.weather[0].main
    console.log(weather)

    let weatherDesc = apiData.weather[0].description
    console.log(weatherDesc)

    // in K
    let temperature = apiData.main.temp
    temperature = parseInt(temperature - 273)
    console.log(temperature)

    // in ms
    let windSpeed = apiData.wind.speed
    console.log(windSpeed)

    // total percenrtage amount of moisture it could hold at the current temperature
    let humidity = apiData.main.humidity
    console.log(humidity)

    // clear weather - sunny 
    // overcast clouds - overcast
    // broken/scattered clouds - clouds
    // thunder
    let imageURL= ""
    if (weatherDesc.includes("clear sky")){
        imageURL = "sun.png"
    }
    else if(weatherDesc.includes("rain")){
        imageURL = "rain.png"
    }
    else if(weatherDesc.includes("snow")){
        imageURL = "snowflake.png"
    }
    else if(weatherDesc.includes("smoke")||weatherDesc.includes("haze")){
        imageURL = "haze.png"
    }
    else if(weatherDesc.includes("overcast")){
        imageURL = "overcast.png"
    }
    else if(weatherDesc.includes("few clouds")){
        imageURL = "cloudy-day.png"
    }
    else if(weatherDesc.includes("clouds")){
        imageURL = "clouds.png"
    }
    else if(weatherDesc.includes("thunderstorm")){
        imageURL = "thunderstorm.png"
    }
    else if(weatherDesc.includes("dust")){
        imageURL = "dust.png"
    }
    else if(weatherDesc.includes("drizzle")){
        imageURL = "drizzle.png"
    }
    else if(weatherDesc.includes("mist")){
        imageURL = "mist.png"
    }
    predictB.style="display:block"
    box2.innerHTML=`<img src="${imageURL}" alt="${city}" width="170px">
                    <p style="font-size:24px">${temperature}<sup>&deg;</sup>C, ${weatherDesc}</p>
                    <p style="font-size:20px">${city}, ${country}</p>`

    box3.innerHTML=`<img src="winds.png" width="35px">
                    <p style="font-size:14px">Wind speed: ${windSpeed} m/s</p>`

    box4.innerHTML=`<img title="total percentage amount of moisture it could hold at the current temperature" src="humidity.png" width="35px">
                    <p title="total percentage amount of moisture it could hold at the current temperature" style="font-size:14px">Humidity: ${humidity}%</p>`
    
    console.log(apiData.coord.lon)
    console.log(apiData.coord.lat)
    predictWeather(apiData.coord.lon,apiData.coord.lat)
}
async function loadWeather(){
    let userInput = document.getElementById("searchInp").value
    box2.style="background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);"
    box34.style="background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);"

    console.log(userInput)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=42d28598d8498ed311b177ab7b170f2b`)
    const apiData = await response.json()
    console.log(apiData)

    let city = apiData.name
    let country = apiData.sys.country
    console.log(city+", "+country)

    let weather = apiData.weather[0].main
    console.log(weather)

    let weatherDesc = apiData.weather[0].description
    console.log(weatherDesc)

    // in K
    let temperature = apiData.main.temp
    temperature = parseInt(temperature - 273)
    console.log(temperature)

    // in ms
    let windSpeed = apiData.wind.speed
    console.log(windSpeed)

    // total percenrtage amount of moisture it could hold at the current temperature
    let humidity = apiData.main.humidity
    console.log(humidity)

    // clear weather - sunny 
    // overcast clouds - overcast
    // broken/scattered clouds - clouds
    // thunder
    let imageURL= ""
    if (weatherDesc.includes("clear sky")){
        imageURL = "sun.png"
    }
    else if(weatherDesc.includes("rain")){
        imageURL = "rain.png"
    }
    else if(weatherDesc.includes("snow")){
        imageURL = "snowflake.png"
    }
    else if(weatherDesc.includes("smoke")||weatherDesc.includes("haze")){
        imageURL = "haze.png"
    }
    else if(weatherDesc.includes("overcast")){
        imageURL = "overcast.png"
    }
    else if(weatherDesc.includes("few clouds")){
        imageURL = "cloudy-day.png"
    }
    else if(weatherDesc.includes("clouds")){
        imageURL = "clouds.png"
    }
    else if(weatherDesc.includes("thunderstorm")){
        imageURL = "thunderstorm.png"
    }
    else if(weatherDesc.includes("dust")){
        imageURL = "dust.png"
    }
    else if(weatherDesc.includes("drizzle")){
        imageURL = "drizzle.png"
    }
    else if(weatherDesc.includes("mist")){
        imageURL = "mist.png"
    }
    predictB.style="display:block"
    box2.innerHTML=`<img src="${imageURL}" alt="${city}" width="170px">
                    <p style="font-size:24px">${temperature}<sup>&deg;</sup>C, ${weatherDesc}</p>
                    <p style="font-size:20px">${city}, ${country}</p>`

    box3.innerHTML=`<img src="winds.png" width="35px">
                    <p style="font-size:14px">Wind speed: ${windSpeed} m/s</p>`

    box4.innerHTML=`<img title="total percentage amount of moisture it could hold at the current temperature" src="humidity.png" width="35px">
                    <p title="total percentage amount of moisture it could hold at the current temperature" style="font-size:14px">Humidity: ${humidity}%</p>`
    
    console.log(apiData.coord.lon)
    console.log(apiData.coord.lat)
    predictWeather(apiData.coord.lon,apiData.coord.lat)
}
async function predictWeather(longitude,latitude){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=0014c74507042b98f4f31e3090c4a218`);
    const apiData = await response.json();
    console.log(apiData);
    for(let i=0;i<apiData.list.length;i++){
        let date_time = apiData.list[i].dt_txt
        let weather_description = apiData.list[i].weather[0].description
        let temp = apiData.list[i].main.temp - 273 //To C
        console.log("Date & Time : ",date_time)
        console.log("Hourly-weather: ",weather_description)
        let imageURL= ""
        if (weather_description.includes("clear sky")){
            imageURL = "sun.png"
        }
        else if(weather_description.includes("rain")){
            imageURL = "rain.png"
        }
        else if(weather_description.includes("snow")){
            imageURL = "snowflake.png"
        }
        else if(weather_description.includes("smoke")||weather_description.includes("haze")){
            imageURL = "haze.png"
        }
        else if(weather_description.includes("overcast")){
            imageURL = "overcast.png"
        }
        else if(weather_description.includes("few clouds")){
            imageURL = "cloudy-day.png"
        }
        else if(weather_description.includes("clouds")){
            imageURL = "clouds.png"
        }
        else if(weather_description.includes("thunderstorm")){
            imageURL = "thunderstorm.png"
        }
        else if(weather_description.includes("dust")){
            imageURL = "dust.png"
        }
        else if(weather_description.includes("drizzle")){
            imageURL = "drizzle.png"
        }
        else if(weather_description.includes("mist")){
            imageURL = "mist.png"
        }
        //Below is not working because display:none in html style attribute
        //now this is fixed after changing dispay property from block to flex in displayPanel() function
        panel.innerHTML+=`  <div style="height:110px;width:82px;border-right:2px solid black;border-bottom:2px solid black;display:flex;align-items:center;justify-content:space-around;flex-direction:column;">
                                <div style="text-align:center">${date_time}</div>
                                <div><img src=${imageURL} width="35px"></div>
                                <div style="text-align:center">${weather_description}</div>
                            </div>`
        //Now just empty previous innerHTML of panel 
        //Done !
        //Error kind of -> heavy intensity rain overflows the panel box 
        // Fix that
    }

}