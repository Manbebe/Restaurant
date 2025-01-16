document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    
    // menu items with the prices
    const menuItems = [
        { name: 'Burger', price: 5 },
        { name: 'Pizza', price: 8 },
        { name: 'fries', price: 4 }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.textContent = `${item.name} - $${item.price}`;
        menu.appendChild(menuItem);
    });
});