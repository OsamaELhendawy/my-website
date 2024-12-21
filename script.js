document.querySelector('#discount-bar .remove').addEventListener('click', function () {
    const discountBar = document.getElementById('discount-bar');
    discountBar.parentNode.removeChild(discountBar);
});
