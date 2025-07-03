const inputBox = document.getElementById('inputBox');
const country = document.getElementById('country');
const state = document.getElementById('state');
const city = document.getElementById('city');
const htd = document.getElementById('hdt');
const wind = document.getElementById('wind');
const tapman = document.getElementById('country');
const logoimg = document.getElementById('logoimg');
const cast  = document.getElementById('cast');


const rain = "rain";
const cloudy = "Partly";
const Mist = "Mist";
const sunny = "Sunny"


const getData = async (event) => {
    event.preventDefault();
    if(!inputBox.value){
        alert("Enter city name!");
        return;
    }
    const cityy = inputBox.value;
    const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=yourAPIWeatherKey&q=${cityy}`);

    const orgData = await fetchData.json();
    let data = orgData;
    console.log(data);

    country.innerHTML = data.location.country;
    state.innerHTML = data.location.region;
    city.innerHTML = data.location.name;
    hdt.innerHTML = data.current.humidity;

    logoimg.src = data.current.condition.icon;
    cast.innerHTML = data.current.condition.text;
    temp.innerHTML = data.current.temp_c;
    wind.innerHTML = data.current.wind_kph;

    let bgImg = data.current.condition.text;
    console.log(bgImg);

    if (bgImg.includes(rain)) {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1655131907892-cdc9c6930a55?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        
    }else if (bgImg.includes(cloudy)) {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1611928482473-7b27d24eab80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D')";
        
    }
    else if (bgImg.includes(Mist)) {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1636402624994-53f80014d9a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        
    }
    else if (bgImg.includes(sunny)) {
        document.body.style.backgroundImage = "url('https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        
    }
    
    
}






