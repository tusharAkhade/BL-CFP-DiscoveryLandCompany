window.addEventListener('DOMContentLoaded', function () {

    console.log('loaded')
    const left_btn = document.getElementById('left-btn')
    const right_btn = document.getElementById('right-btn')

    let weather = [{ temp: " 94f ", speed: " 16mph ", compass: " 197 " }, { temp: " 43f ", speed: " 21.4mph ", compass: "180" }, { temp: "78f", speed: "8.15mph", compass: "108" }, { temp: "99f", speed: "6.5mph", compass: "165" }, { temp: "86f", speed: "4.5mph", compass: "135" }];
    let address = [
        { city: " Las Vegas, Nevada ", place: " The Summit " },
        { city: " Westhampton Beach, NY ", place: " DUNE DECK " },
        { city: " Amenia, New York ", place: " SILO RIDGE " },
        { city: " Big Sky, Montana ", place: " YELLOWSTONE CLUB " },
        { city: " Coeur d’Alene, Idaho ", place: " GOZZER RANCH " },
    ];

    let coordinates = [{ coordinate: "36.1094N / -115.3287W" }, { coordinate: "11.1094N / -5.3287W" }, { coordinate: "3.1094N / -25.3287W" }, { coordinate: "55.1094N / -66.3287W" }, { coordinate: "12.121212N / -23.456789W" }];

    let temp = document.getElementById('temperature')
    temp.innerHTML = weather[0].temp
    let speed = document.getElementById('speed')
    speed.innerHTML = weather[0].speed
    let compass = document.getElementById('compass')
    compass.innerHTML = weather[0].compass

    let city = document.getElementById('city')
    city.innerHTML = address[0].city
    let place = document.getElementById('loc')
    place.innerHTML = address[0].place

    let coordinate = document.getElementById('coordinates')
    coordinate.innerHTML = coordinates[0].coordinate

    let count = 0

    left_btn.addEventListener('click', function () {
        if (count > 0) {
            count--
        }
        else {
            count = weather.length - 1
        }
        temp.innerHTML = weather[count].temp
        speed.innerHTML = weather[count].speed
        compass.innerHTML = weather[count].compass

        city.innerHTML = address[count].city
        place.innerHTML = address[count].place

        coordinate.innerHTML = coordinates[count].coordinate
    })

    right_btn.addEventListener('click', function () {
        if (count < weather.length - 1) {
            count++
        }
        else {
            count = 0
        }
        temp.innerHTML = weather[count].temp
        speed.innerHTML = weather[count].speed
        compass.innerHTML = weather[count].compass

        city.innerHTML = address[count].city
        place.innerHTML = address[count].place

        coordinate.innerHTML = coordinates[count].coordinate
    })

})