const cheesePizzaHolder = document.querySelector('.cheese-pizza-image-holder');
const vegetablePizzaHolder = document.querySelector('.vegetable-pizza-image-holder' );
const friesHolder = document.querySelector('.fries-image-holder');

cheesePizzaHolder.addEventListener('click', e => {
    window.location = "/pre-order?type=cheese-pizza";
});

vegetablePizzaHolder.addEventListener('click', e => {
    window.location = "/pre-order?type=vegetable-pizza";
});

friesHolder.addEventListener('click', e => {
    window.location = "pre-order?type=fries";
});

document.querySelector('.view-cart-button').addEventListener('click', e => {
    window.location = "/cart";
});