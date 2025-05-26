// console.log("Weather App Script Loaded");
// setTimeout(()=>{
//     console.log("Async");
// },2000);

// fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
//     if(response.status==200){
//         response.json().then(function(data) {
//             console.log(data);
//         });
//     }else{
//         alert("not found");
//     }
// })

// https://jsonplaceholder.typicode.com/todos/1

// ------easy wat to do it

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   if (response.status == 200) {
//     const data = await response.json();
//     console.log(data);
//   }
// }
// getData();

// 1.23
// https://www.weatherapi.com/api-explorer.aspx

const searchBtn = document.getElementById("search");
const searchInput = document.querySelector("input");

searchBtn.addEventListener("click", async function () {
  const location = searchInput.value;
  if (location != "") {
    const data = await fetchWeather(location);
    if (data == null) {
    } else {
      updateDOM(data);
    }
    searchInput.value = "";
  }
});

searchInput.addEventListener("keydown", async function (event) {
  if (event.key === "Enter") {
    const location = searchInput.value;
    if (location != "") {
      const data = await fetchWeather(location);
      if (data == null) {
      } else {
        updateDOM(data);
      }
      searchInput.value = "";
    }
  }
});

const tempEle = document.querySelector(".temprature");
const locationEle = document.querySelector(".location");
const timeEle = document.querySelector(".time");
const dayEle = document.querySelector(".day");
const dateEle = document.querySelector(".date");
const conditionEle = document.querySelector(".condition");
const iconEle = document.querySelector(".image");

function updateDOM(data) {
  console.log("Updating UI with data:", data);
  const temp = data.current.temp_c;
  const location = data.location.name;
  const timeDate = data.location.localtime;
  const time = timeDate.split(" ")[1];
  const date = timeDate.split(" ")[0];
  const condition = data.current.condition.text;
  const icon = data.current.condition.icon;

  // Get current day name from date
  const dayIndex = new Date(timeDate).getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[dayIndex];

  tempEle.innerHTML = `${temp}°C`;
  locationEle.textContent = location;
  timeEle.innerText = time;
  dayEle.innerHTML = dayName;
  dateEle.innerHTML = date;
  conditionEle.innerHTML = condition;
  iconEle.src = `https:${icon}`;
}

async function fetchWeather(location) {
  const url = `https://api.weatherapi.com/v1/current.json?key=12e82c3832774452abf114855252405&q=${location}&aqi=no`;
  const response = await fetch(url);
  if (response.status == 200) {
    const json = await response.json();
    return json;
  } else {
    alert("Weather data not found or error occurred.");
    return null;
  }
}



