import itemsList from "./items.js";

// Get the form and table elements
const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const grandTotal = document.getElementById('grand_total');

console.log(itemsList)
const getItems = ()=>{
    itemsList.forEach((item)=>{
        return item.totalCost = item.itemQuantity * item.itemPrice
        
    })
let overall = 0;
    // Create a new expense card
  const card = document.createElement('div');
  card.className = 'expense-card';

  // Populate the card with expense details
   itemsList.forEach((item)=>{
    card.innerHTML = `
    <h3>${item.itemName}</h3>
    <p>Quantity: ${item.itemQuantity}</p>
    <p>Price per Unit: N${item.itemPrice.toFixed(2)}</p>
    <p>Total Spent: N${item.totalCost.toFixed(2)}</p>
  `;
    })
 for(let i = 0; i < itemsList.length; i++){
    overall += itemsList[i].totalCost
 }

 grandTotal.innerHTML = `Grand total: N${overall.toFixed(2)}`
  expenseList.appendChild(card);
}
// Event listener for the form submission

expenseForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Get input values
  const itemName = document.getElementById('itemName').value;
  const itemQuantity = parseInt(document.getElementById('itemQuantity').value);
  const itemPrice = parseFloat(document.getElementById('itemPrice').value);

  itemsList.push({
    itemName,itemQuantity, itemPrice
  })


getItems()
  expenseForm.reset();
});

getItems()