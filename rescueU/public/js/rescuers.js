// div containing everything inside body
var container = document.createElement("div")
container.className = "container-fluid"

// top bar containing name, buttons
var topBar = document.createElement("div")
topBar.className = "row p-3 mb-0 align-items-end" // bg-info 
topBar.style.cssText = "background-color: #27314f; outline: 1px solid black"

// title column
var titleColumn = document.createElement("div")
titleColumn.className = "col-md-2"
// title button
var titleButton = document.createElement("a")
titleButton.className = "btn btn-default"
titleButton.role = "button"
titleButton.href = "./"
// title text
var titleText = document.createElement("h1")
titleText.innerText = "rescueU"
titleText.style.cssText = "color: #ed5f5f"
// titleText.style.cssText = "color: #d44444; text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;"
// create title hierarchy
titleButton.appendChild(titleText)
titleColumn.appendChild(titleButton)

// resources column
var resourcesColumn = document.createElement("div")
resourcesColumn.className = "col-md-2"
// resources button
var resourcesButton = document.createElement("a")
resourcesButton.className = "btn btn-default"
resourcesButton.role = "button"
resourcesButton.href = "./resources.html"
// resources text
var resourcesText = document.createElement("h3")
resourcesText.className = "text-white"
resourcesText.innerText = "Resources"
// create resources hierarchy
resourcesButton.appendChild(resourcesText)
resourcesColumn.appendChild(resourcesButton)

// rescuers column
var rescuersColumn = document.createElement("div")
rescuersColumn.className = "col-md-2"
// rescuers button
var rescuersButton = document.createElement("a")
rescuersButton.className = "btn btn-default"
rescuersButton.role = "button"
rescuersButton.href = "./rescuers.html"
// rescuers text
var rescuersText = document.createElement("h3")
rescuersText.className = "text-white"
rescuersText.innerText = "Rescuers"
// create rescuers hierarchy
rescuersButton.appendChild(rescuersText)
rescuersColumn.appendChild(rescuersButton)

// append top bar
topBar.appendChild(titleColumn)
topBar.appendChild(resourcesColumn)
topBar.appendChild(rescuersColumn)
container.appendChild(topBar)
document.body.appendChild(container)

// place picture in background
const getDivHeight = (headerHeight, clientHeight) => clientHeight - headerHeight - 1
var lower = document.createElement("div")
lower.className = "row"
lower.style.cssText = "background-image: url(images/droplets.jpg); height: " + getDivHeight(topBar.clientHeight, document.body.clientHeight)+"px; background-color: #3275a8; background-position: center; background-repeat: no-repeat; background-size: cover;"
container.appendChild(lower)

var dataBox = document.createElement("div")
dataBox.className = "col-6 align-items-start"
dataBox.style.cssText = "overflow: auto; max-height: 500px"
var usersPlaces = [];

// create map
var mapContainer = document.createElement("div")
mapContainer.className = "col-6 align-items-start"
var mapBox = document.createElement("div")
mapBox.id = "map"
mapBox.style.cssText = "height: 90%; width: 100%; margin: 20px"
var map;
function initMap() { 
    map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.9976354, lng: -93.6321896},
    zoom: 8
    });
}
mapContainer.appendChild(mapBox)
lower.appendChild(mapContainer)

getUserPlacesHandler = (callback) => {
    fetch('https://rescueu.firebaseio.com//users_location.json')
      .then(res => res.json())
      .then(parsedRes => {
        const placesArray = [];
        
        for (const key in parsedRes) {
          placesArray.push({
            latitude: parsedRes[key].latitude,
            longitude: parsedRes[key].longitude,
            id: key
          });
          console.log(key)
        }
        
        console.log(placesArray)
        usersPlaces = placesArray
        callback()
      })
      .catch(err => console.log(err));
  };
getUserPlacesHandler(makeMapAndTable)

//const dbRef = firebase.database().ref('users_location');//new Firebase("https://rescueu.firebaseio.com//users_location.json")
deleteDataPointHandler = (key) => {
    return fetch("https://rescueu.firebaseio.com//users_location" + '/' + key + '.json', {
        method: 'delete'
      }).then(response =>
        response.json().then(json => {
          return json;
        })
      );
}

function makeMapAndTable() {
    
    for (j = 0; j < usersPlaces.length; j++) {
        let marker = new google.maps.Marker({
            position: {lat: usersPlaces[j].latitude, lng: usersPlaces[j].longitude},
            map: map,
            title: "Latitude: " + usersPlaces[j].latitude + " Longitude: " + usersPlaces[j].longitude
        })
        marker.setMap(map)
    }

    console.log(usersPlaces)

    // create table
    var table = document.createElement("table")
    table.className = "table table-dark"
    // create table header
    var tableHead = document.createElement("thead")
    table.appendChild(tableHead)
    var headRow = document.createElement("tr")
    tableHead.appendChild(headRow)
    var numCol = document.createElement("th")
    numCol.scope = "col"
    numCol.innerText = "#"
    headRow.appendChild(numCol)
    var latCol = document.createElement("th")
    latCol.scope = "col"
    latCol.innerText = "Latitude"
    headRow.appendChild(latCol)
    var longCol = document.createElement("th")
    longCol.scope = "col"
    longCol.innerText = "Longitude"
    headRow.appendChild(longCol)
    var delCol = document.createElement("th")
    delCol.scope = "col"
    delCol.innerText = "Delete Entry"
    headRow.appendChild(delCol)
    
    // create table body
    var tableBody = document.createElement("tbody")
    tableBody.style.cssText = "height: " + getDivHeight()/////px; overflow: auto"
    table.appendChild(tableBody)
    for (i = 0; i < usersPlaces.length; i++) {
        let curRow = document.createElement("tr")
        let curNum = document.createElement("th")
        curNum.scope = "row"
        curNum.innerText = i
        curRow.appendChild(curNum)
        let curLat = document.createElement("td")
        curLat.innerText = usersPlaces[i].latitude
        curRow.appendChild(curLat)
        let curLong = document.createElement("td")
        curLong.innerText = usersPlaces[i].longitude
        curRow.appendChild(curLong)
        let curDel = document.createElement("td")
        let delBut = document.createElement("button")
        delBut.innerText = "X"
        delBut.style.cssText = "color: #ed5f5f"
        var id = usersPlaces[i].id
        delBut.onclick = (function(id) { return async function() { 
            await deleteDataPointHandler(id); 
            location.reload()
        }})(id);
        curDel.appendChild(delBut)
        curRow.appendChild(curDel)
        tableBody.appendChild(curRow)
    }
    dataBox.appendChild(table)
    lower.appendChild(dataBox)
}