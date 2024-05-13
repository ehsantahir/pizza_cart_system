// const smallBtn = document.querySelector('.small-button');
// const mediumBtn = document.querySelector('.medium-button');
// const largeBtn = document.querySelector('.large-button');
// const price = document.querySelector('.value');
// const makeOrderButton = document.querySelector('.make-order-button');
//
// smallBtn.addEventListener("click", e => {
//     price.innerText = "5$";
//
// });
//
// mediumBtn.addEventListener("click", e => {
//     price.innerText = "10$";
// });
//
// largeBtn.addEventListener("click", e => {
//     price.innerText = "15$";
// });
//
//
// makeOrderButton.addEventListener('click', e => {
//
//     let value = 0;
//     let size = "";
//     let itemType = "";
//
//     if (smallBtn.checked) {
//         value = price.innerText;
//     }
//
//
// });

function onRadioClick(type, radioIndex) {
    if (type === 'cheese-pizza') {
        document.querySelector('.price-input').innerText = `$${[5, 10, 15][radioIndex]}`;
    } else if (type === 'vegetable-pizza') {
        document.querySelector('.price-input').innerText = `$${[6, 12, 18][radioIndex]}`;
    }
}

function onAddToCartClick(type) {
    if (type === 'fries') {
        window.location = `/add-to-cart/${type}?size=null&price=10`;
    } else {
        const priceValue = document.querySelector('.price-input').innerText.replace('$', '');

        let checkedRadioButton = null;

        for (const radioButton of document.querySelectorAll('input')) {
            if (radioButton.checked) {
                checkedRadioButton = radioButton;
                break;
            }
        }

        window.location = `/add-to-cart/${type}?size=${checkedRadioButton.id}&price=${priceValue}`;
    }
}

document.querySelector('.view-cart-button').addEventListener('click', e => {
    window.location = "/cart";
});