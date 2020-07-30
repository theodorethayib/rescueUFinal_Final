// div containing everything inside body
var container = document.createElement("div")
container.className = "container-fluid"

// top bar containing name, buttons
var topBar = document.createElement("div")
topBar.className = "row p-3 mb-0 align-items-end"
topBar.style.cssText = "background-color: #27314f; outline: 1px solid #1f2740"

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
lower.className = "row align-items-center"
lower.style.cssText = "background-image: url(images/droplets.jpg); height: " + getDivHeight(topBar.clientHeight, document.body.clientHeight)+"px; background-color: #3275a8; background-position: center; background-repeat: no-repeat; background-size: cover;"
container.appendChild(lower)

// intro box
var introBox = document.createElement("div")
introBox.className = "col-6 align-items-center"
// intro title
var introTitle = document.createElement("h1")
introTitle.className = "text-white"
introTitle.innerText = "Welcome to rescueU!"
// intro text
var introPara = document.createElement("p")
introPara.className = "text-white"
introPara.innerText = "rescueU is your one-stop shop " +
    "to get help in a natural disaster! Please send " +
    "us your location by clicking on the button and " +
    "feel free to use our chat bot to help ensure your " +
    "safety. The Resources link at the top of the screen " +
    "can be used to access resources that can provide furthur " +
    "aid to those in need. The Rescuers link can be used to " +
    "access information pertinent to disaster responders."
introBox.appendChild(introTitle)
introBox.appendChild(introPara)
lower.appendChild(introBox)

// input box
var infoBox = document.createElement("div")
infoBox.className = "col-6 align-items-start"
// location button
var locationButton = document.createElement("button")
// POST function
getUserLocationHandler = () => {
    var pos = null
    navigator.geolocation.getCurrentPosition(position => {
        pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
      console.log(pos);

      fetch('https://rescueu.firebaseio.com//users_location.json', {
      // fetch('https://ithichadiftedfulderivair:ba459e2554b002858496c23ccc8d8dcbd4e6f2c2@https://90874da0-7626-40aa-a36a-ed6a3b5574d1-bluemix.cloudant.com/users_location', {
        method: 'POST',
        body: JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }, err => console.log(err));
    locationButton.disabled = true
  }
locationButton.onclick = getUserLocationHandler
locationButton.className = "btn btn-lg btn-primary btn-block"
locationButton.innerText = "Submit Location"
locationButton.style.cssText = "background-color:#27314f; color: white; border: 1px solid #1f2740"
// chat button
var chatButton = document.createElement("a")
chatButton.className = "btn btn-lg btn-primary btn-block"
chatButton.innerText = "Chat Bot"
chatButton.role = "button"
chatButton.href = "https://assistant-chat-us-south.watsonplatform.net/web/public/a0a4b415-33e3-4a14-bbe1-2ae5ce46c91e"
chatButton.style.cssText = "background-color: #27314f; color: white; border: 1px solid #1f2740"

infoBox.appendChild(locationButton)
infoBox.appendChild(chatButton)
lower.appendChild(infoBox)
