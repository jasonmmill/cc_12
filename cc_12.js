//Task 1: Business Dashboard - DOM Element Selection and Creation
const dashboardById = document.getElementById("dashboard")
const dashboardByQuery = document.querySelector("#dashboard")
const revenueCard = document.createElement("div")
revenueCard.setAttribute("class", "metric-card")
revenueCard.setAttribute("id", "revenueCard")
revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
`
const profitCard = document.createElement("div")
profitCard.setAttribute("class", "metric-card")
profitCard.setAttribute("id", "profitCard")
profitCard.innerHTML = `
    <h3>Profit</h3>
    <p>$0</p>
`
const expensesCard = document.createElement("div")
expensesCard.setAttribute("class", "metric-card")
expensesCard.setAttribute("id", "expensesCard")
expensesCard.innerHTML = `
    <h3>Expenses</h3>
    <p>$0</p>
`
dashboardById.appendChild(revenueCard)
dashboardById.appendChild(profitCard)
dashboardById.appendChild(expensesCard)

// Task 2: Updating Dashbaord Metrics - Working with NodeLists and Arrays
const allCards = document.querySelectorAll(".metric-card")
const allCardsArray = [...allCards]

allCardsArray.forEach(card => {
    card.innerHTML += " - Refreshed"
    card.style.backgroundColor = "pink"
})

// Task 3: Dynamic Inventory Management - Adding & Removing Items
function addListItem(productName) {
    const inventoryList = document.getElementById("inventoryList")
    const listItem = document.createElement("li")
    listItem.setAttribute("class", "product-item")
    listItem.setAttribute("data-attribute", productName)
    listItem.textContent = productName

    listItem.addEventListener("click", () => {
        inventoryList.removeChild(listItem)
    })
    inventoryList.appendChild(listItem)
}

// Task 4: Business Customer Section - Handling Event Bubbling
const customerSection = document.getElementById("customerSection")
customerSection.addEventListener("click", () => {
    console.log("Customer section clicked.")
})

const customerCard = document.querySelectorAll(".customer-card")
customerCard.forEach(card => {
card.addEventListener("click", (c) => {
    console.log("Customer card clicked.")
    c.stopPropagation()
})})