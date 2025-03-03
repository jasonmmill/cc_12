//Task 1: Business Dashboard - DOM Element Selection and Creation
const dashboardById = document.getElementById("dashboard") // select dashboard container
const dashboardByQuery = document.querySelector("#dashboard") // select dashboard container
const revenueCard = document.createElement("div") // create div element
revenueCard.setAttribute("class", "metric-card") // set css class                     
revenueCard.setAttribute("id", "revenueCard") // set attribute id
revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
` // html code inside revenue card
const profitCard = document.createElement("div") // create div element
profitCard.setAttribute("class", "metric-card") // set css class
profitCard.setAttribute("id", "profitCard") // set attribute id
profitCard.innerHTML = `
    <h3>Profit</h3> 
    <p>$0</p>
` // html code inside profit card
const expensesCard = document.createElement("div") // create div element
expensesCard.setAttribute("class", "metric-card") // set css class
expensesCard.setAttribute("id", "expensesCard") // set attribute id
expensesCard.innerHTML = `
    <h3>Expenses</h3>
    <p>$0</p>
` // html code inside expenses card
dashboardById.appendChild(revenueCard)
dashboardById.appendChild(profitCard)
dashboardById.appendChild(expensesCard)

// Task 2: Updating Dashbaord Metrics - Working with NodeLists and Arrays
const allCards = document.querySelectorAll(".metric-card") // select all metric cards
const allCardsArray = [...allCards] // turn allCards into an array

allCardsArray.forEach(card => { // function to update style and inner html code for each metric card
    card.innerHTML += " - Refreshed"
    card.style.backgroundColor = "pink"
})

// Task 3: Dynamic Inventory Management - Adding & Removing Items
function addListItem(productName) { // function to add an item to the list
    const inventoryList = document.getElementById("inventoryList") // select inventory list container
    const listItem = document.createElement("li") // create list item
    listItem.setAttribute("class", "product-item") // set css class 
    listItem.setAttribute("data-attribute", productName) // set data attribute to product name
    listItem.textContent = productName // product name as text content

    listItem.addEventListener("click", () => { // function to remove item from list when clicked
        inventoryList.removeChild(listItem)
    })
    inventoryList.appendChild(listItem) // add item to list
}

// Task 4: Business Customer Section - Handling Event Bubbling
const customerSection = document.getElementById("customerSection") // select customer section container
customerSection.addEventListener("click", () => { // function to log message when customer section is clicked
    console.log("Customer section clicked.")
})

const customerCard = document.querySelectorAll(".customer-card") // select all customer cards
customerCard.forEach(card => { // for each card
card.addEventListener("click", (c) => { // function to log message when customer card is clicked on
    console.log("Customer card clicked.")
    c.stopPropagation() // stops bubbling (parent message)
})})