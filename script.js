import itemsList from "./items.js";

// Get the form and table elements
const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const grandTotal = document.getElementById('grand_total');
// const expenseTable = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];

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

  // Add the card to the expense list
  expenseList.appendChild(card);

    // const newRow = expenseTable.insertRow();

    // // Insert cells into the new row
    // const nameCell = newRow.insertCell(0);
    // const quantityCell = newRow.insertCell(1);
    // const priceCell = newRow.insertCell(2);
    // const totalCell = newRow.insertCell(3);

    // itemsList.forEach((item)=>{
    //     nameCell.textContent = item.itemName
    //     quantityCell.textContent = item.itemQuantity
    //   priceCell.textContent = item.itemPrice.toFixed(2)
    //   totalCell.textContent = item.totalCost.toFixed(2)
    // })
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
//   console.log(itemsList)
  // Calculate total cost
//   const totalCost = itemQuantity * itemPrice;

  // Create a new row in the table
//   const newRow = expenseTable.insertRow();

//   // Insert cells into the new row
//   const nameCell = newRow.insertCell(0);
//   const quantityCell = newRow.insertCell(1);
//   const priceCell = newRow.insertCell(2);
//   const totalCell = newRow.insertCell(3);

// itemsList.forEach((item)=>{
//     nameCell.textContent = item.itemName
//     quantityCell.textContent = item.itemQuantity
//   priceCell.textContent = item.itemPrice.toFixed(2)
//   totalCell.textContent = item.totalCost.toFixed(2)
// })
  // Set the cell values
//   nameCell.textContent = itemName;
//   quantityCell.textContent = itemQuantity;
//   priceCell.textContent = itemPrice.toFixed(2);
//   totalCell.textContent = totalCost.toFixed(2);

  // Clear the form inputs
  expenseForm.reset();
});

getItems()