// Footer date handling
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}

// Weather Section - OpenWeatherMap API
const weatherContainer = document.querySelector(".weather-card");

async function getWeather() {
  // OpenWeatherMap API - Using Lagos coordinates
  const lat = 6.5244;
  const lon = 3.3792;
  const apiKey = "4d8fb5b93d4af21d66a2948710284366"; // Demo API key
  const units = "imperial";
  
  try {
    // Fetch current weather
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`
    );
    const currentData = await currentResponse.json();
    
    // Fetch 3-day forecast
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`
    );
    const forecastData = await forecastResponse.json();
    
    displayWeather(currentData, forecastData);
  } catch (error) {
    console.error("Error loading weather:", error);
    displayWeatherFallback();
  }
}

function displayWeather(current, forecast) {
  const temp = Math.round(current.main.temp);
  const description = current.weather[0].description;
  const icon = current.weather[0].icon;
  
  // Get one forecast per day (noon) for 3 days
  const dailyForecasts = [];
  const seenDates = new Set();
  
  for (const item of forecast.list) {
    const date = item.dt_txt.split(" ")[0];
    if (!seenDates.has(date) && dailyForecasts.length < 3) {
      seenDates.add(date);
      dailyForecasts.push({
        date: new Date(item.dt * 1000).toLocaleDateString("en-US", { weekday: "short" }),
        temp: Math.round(item.main.temp),
        icon: item.weather[0].icon
      });
    }
  }
  
  weatherContainer.innerHTML = `
    <div class="weather-current">
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" class="weather-icon">
      <div class="weather-info">
        <span class="temperature">${temp}°F</span>
        <span class="conditions">${description}</span>
      </div>
    </div>
    <div class="weather-forecast">
      ${dailyForecasts.map(day => `
        <div class="forecast-day">
          <span class="forecast-date">${day.date}</span>
          <img src="https://openweathermap.org/img/wn/${day.icon}.png" alt="forecast" class="forecast-icon">
          <span class="forecast-temp">${day.temp}°F</span>
        </div>
      `).join("")}
    </div>
  `;
}

function displayWeatherFallback() {
  weatherContainer.innerHTML = `
    <div class="weather-current">
      <div class="weather-info">
        <span class="temperature">84°F</span>
        <span class="conditions">Partly Cloudy</span>
      </div>
    </div>
    <div class="weather-forecast">
      <div class="forecast-day">
        <span class="forecast-date">Wed</span>
        <span class="forecast-temp">86°F</span>
      </div>
      <div class="forecast-day">
        <span class="forecast-date">Thu</span>
        <span class="forecast-temp">85°F</span>
      </div>
      <div class="forecast-day">
        <span class="forecast-date">Fri</span>
        <span class="forecast-temp">83°F</span>
      </div>
    </div>
  `;
}

// Initialize weather if container exists
if (weatherContainer) {
  getWeather();
}

// Business Spotlight - Display 2-3 gold/silver members
const spotlightContainer = document.querySelector("#spotlights");

async function getSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    
    // Filter for gold or silver members only
    const premiumMembers = data.filter(member => 
      member.membership === "gold" || member.membership === "silver"
    );
    
    // Shuffle and pick 2-3 random premium members
    const shuffled = premiumMembers.sort(() => 0.5 - Math.random());
    const featured = shuffled.slice(0, 3);
    
    displaySpotlights(featured);
  } catch (error) {
    console.error("Error loading spotlights:", error);
  }
}

function displaySpotlights(members) {
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");
    
    // Format membership level for display
    const membershipLabel = member.membership.charAt(0).toUpperCase() + member.membership.slice(1);
    const membershipClass = member.membership;
    
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <span class="membership-badge ${membershipClass}">${membershipLabel} Member</span>
      <h3>${member.name}</h3>
      <p class="address">${member.address}</p>
      <p class="phone">${member.phone}</p>
      <a href="${member.website}" target="_blank" class="visit-btn">Visit Website</a>
    `;
    
    spotlightContainer.appendChild(card);
  });
}

// Initialize spotlight if container exists
if (spotlightContainer) {
  getSpotlights();
}
