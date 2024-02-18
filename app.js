
const container = document.querySelector(".renderContainer")
const cityName = document.querySelector("#cityName")

const lat = "44.34"
const lon = "10.99"
const apiKey = "1df438bd50ce8edeeb00324d41268430"


const searchWeather = async () => {
    try {
        const cityValue = cityName.value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
        const response = await fetch(url)
        if (!response.ok) throw new Error("error fetching data")
        const json = await response.json()
        const temp = json.main.temp
        const weather = json.weather[0].main
        const weatherDescription = json.weather[0].description
        const country = json.sys.country
        const feelslike = json.main.feels_like
        const humidity =json.main.humidity
        console.log(temp);
        container.innerHTML = `
        <div >
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm bg-dark text-light"  >
          <div class=" py-3">
            <h1 class="my-0 fw-normal">City</h1>
          </div>
          <div class="card-body ">
            <h1 class="card-title pricing-card-title">${json.name}</h1>
            <img src="http://openweathermap.org/img/wn//${json.weather[0].icon}@4x.png" class="w-10">

            <br/>
            <button type="button" class="w-100 btn btn-lg btn-light ">Country ${country}</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm bg-dark text-light">
          <div class=" py-3">
            <h1 class="my-0 fw-normal">Temperature</h1>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">${temp} 'C</h1>
            <img src="http://openweathermap.org/img/wn//${json.weather[0].icon}@4x.png" class="w-10">

            <br/>
            <button type="button" class="w-100 btn btn-lg btn-light">feels like ${feelslike}, Humidity: ${humidity}</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3  bg-dark text-light">
          <div class=" py-3 ">
            <h1 class="my-0 fw-normal">Destription</h1>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">${weather}</h1>
            <img src="http://openweathermap.org/img/wn//${json.weather[0].icon}@4x.png" class="w-10">

            <br/>
            <button type="button" class="w-100 btn btn-lg btn-light">${weatherDescription}</button>
            <i class="${json.weather[0].icon}"> </i>
          </div>
        </div>
      </div>
    </div>
  </div>
        `

    } catch (error) {
        console.log(error, "this is error");
        console.log(error.message);

    }
}

const date = new Date()
   const totalDate =`${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()}` 
   console.log(totalDate) 
