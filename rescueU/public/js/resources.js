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
lower.className = "row"// align-items-center"
lower.style.cssText = "background-image: url(images/droplets.jpg); height: " + getDivHeight(topBar.clientHeight, document.body.clientHeight)+"px; background-color: #3275a8; background-position: center; background-repeat: no-repeat; background-size: cover;"
container.appendChild(lower)

var linkBox = document.createElement("div")
linkBox.className = "col-12 align-items-center"
linkBox.style.cssText = "margin-top: 20px"

var linkTitle = document.createElement("h1")
linkTitle.innerText = "Resources for Victims"
linkTitle.className = "text-center text-white"

var linkList = document.createElement("div")
linkList.className = "list-group align-items-center"

var link1 = document.createElement("a")
link1.className = "list-group-item list-group-item-action"
link1.href = "https://www.benefits.gov/categories/Disaster%20Relief"
link1.innerText = "Benefits.gov Disaster Relief Info"
link1.style.cssText = "width: 80%; background-color: #27314f; color: white; border: 1px solid #1f2740"
linkList.appendChild(link1)
var link2 = document.createElement("a")
link2.className = "list-group-item list-group-item-action"
link2.href = "https://www.incharge.org/blog/make-sure-your-family-has-a-disaster-plan/"
link2.innerText = "InCharge Disaster Plan Guide"
link2.style.cssText = "width: 80%; background-color: #27314f; color: white; border: 1px solid #1f2740"
linkList.appendChild(link2)
var link3 = document.createElement("a")
link3.className = "list-group-item list-group-item-action"
link3.href = "https://www.usa.gov/disaster-financial-help"
link3.innerText = "USA.gov Financial Assistance After a Disaster"
link3.style.cssText = "width: 80%; background-color: #27314f; color: white; border: 1px solid #1f2740"
linkList.appendChild(link3)
var link4 = document.createElement("a")
link4.className = "list-group-item list-group-item-action"
link4.href = "https://www.cwla.org/wp-content/uploads/2017/09/CWLA_DisasterResource-Guide.pdf"
link4.innerText = "CWLA Natural Disaster Resource Guide"
link4.style.cssText = "width: 80%; background-color: #27314f; color: white; border: 1px solid #1f2740"
linkList.appendChild(link4)

linkBox.appendChild(linkTitle)
linkBox.appendChild(linkList)
lower.appendChild(linkBox)
