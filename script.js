const orderForm = document.getElementById('orderForm');
const orderSummary = document.getElementById('orderSummary');
const totalEarnings = document.getElementById('totalEarnings');
let earnings = 0;

document.getElementById('orderForm').addEventListener('submit', (event) => {
    const selectedItem = document.getElementById('item').value;
    const menuItem = menuItems.find(item => item.name.toLowerCase() === selectedItem);
    const price = menuItem ? menuItem.price : 0;
    event.preventDefault();



    // Clear form fields
    orderForm.reset();
    const item = document.getElementById('item').value;

    // Update order summary
    const listItem = document.createElement('li');
    listItem.textContent = `${item}: $${price.toFixed(2)}`;
    orderSummary.appendChild(listItem);

    // Update total earnings
    earnings += price;
    totalEarnings.textContent = earnings.toFixed(2);
});
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');

    // menu items with the prices
    const menuItems = [
        { name: 'Cheeseburger', price: 5 },
        { name: 'Hamburger', price: 4 },
        { name: 'Pizza', price: 3 },
        { name: 'fries', price: 2 },
        { name: 'Chicken tenders', price: 5 }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.textContent = `${item.name} - $${item.price}`;
        menu.appendChild(menuItem);
    });
});
document.getElementById('skipDayButton').addEventListener('click', () => {
    // says "Skip Day" when button is clicked
    console.log('Day skipped');
});
document.getElementById('restockButton').addEventListener('click', () => {
    // says "Skip Day" when button is clicked
    console.log('Restocked');
});