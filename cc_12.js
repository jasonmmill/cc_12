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

dashboardById.appendChild(revenueCard)

// Task 2: Updating Dashbaord Metrics - Working with NodeLists and Arrays
const allCards = document.querySelectorAll("metric-card")
const allCardsArray = [...allCards]

allCardsArray.forEach(card => {
    const revenue = card.querySelector("h3")
    revenue.innerText += " - Refreshed"
    card.style.backgroundColor = "lime"
})