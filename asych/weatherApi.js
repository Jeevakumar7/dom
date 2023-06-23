api_key='1551602e75c08e1ffa444ef4026a945f'
async function weather_report() {
    var v1 = fetch("https://restcountries.com/v3.1/all");
    
    // var v1 = fetch(
    // "https://api.unsplash.com/photos/?client_id=Nai_odTs5OK2fKOuhKlnezSyYO74ZsFMgw-9tlXqJ9g"
    
    // );
    var v2 = await v1;
    var v3 = v2.json();
    var v4 = await v3;
    // countries_weather.append(container)
    for (let i of v4) {
    // name
    // var body = document.querySelector("body");
    var container = document.createElement("div");
    lat =i.latlng[0]
    lng=i.latlng[1]
    container.setAttribute('lat',lat)
    container.setAttribute('lng',lng)
    // console.log(i.latlng)
    container.classList="container"

    var container_parent=document.querySelector('.container_parent')
    container_parent.append(container);
    // var all_parent = document.querySelector(".countries_weather");
    // all_parent.append(container);
    container.style.display = "inline-block";
    container.classList = "parent";


    
    var name = document.createElement("p");
    name.innerText = i.name.common;
    // console.log(i.name.common)
    container.append(name);

    //Flag
    var flag = document.createElement("img");
    flag.setAttribute("src", i.flags.png);
    // console.log(i.flags.png)
    container.append(flag);

    //capital    
    var capital = document.createElement("p");
    capital.innerText = i.capital;
    container.append(capital);
    // console.log(i.capital);
    //region
    var region = document.createElement("p");
    region.innerText = i.region;
    container.append(region);
    // console.log(i.region)

    // country code
    var country_code = document.createElement("p");
    country_code.innerText = i.fifa;
    container.append(country_code);
    // console.log(i.fifa)
    
    //LatIng
    var button = document.createElement("button");
    button.innerText = "click for weather";
    button.setAttribute("onclick", "weatherapi(this)");
    // button.onclick(button.addEventListener("click", () => {}));
    container.append(button);
    

    // console.log(i.latlng[0])
    }
    }
    weather_report();
async function weatherapi(e) {
        // console.log(e.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling)
        var parent=e.parentElement
        // console.log(parents)
        var lat=parent.getAttribute('lat')
        // console.log(lat)
        
        var lng=parent.getAttribute('lng')
        // console.log(lng)
    // console.log(e);
    var weather_url=(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${api_key}`)
       var a= fetch(weather_url)
       b=await a
       c=b.json()
       d=await c
       console.log(d.list[0])
    }
   