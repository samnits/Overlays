function toggleFilter(id) {
    const content = document.getElementById(id);
    const arrow = document.getElementById(`${id}-arrow`);
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        arrow.classList.add('up');
    } else {
        content.style.display = "none";
        arrow.classList.remove('up');
    }
}

function updatePriceInputs() {
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    const minPriceInput = document.getElementById('min-price-input');
    const maxPriceInput = document.getElementById('max-price-input');

    if (parseInt(minPrice.value) > parseInt(maxPrice.value)) {
        minPrice.value = maxPrice.value;
    }

    minPriceInput.value = minPrice.value;
    maxPriceInput.value = maxPrice.value;

    minPrice.max = maxPrice.value;
    maxPrice.min = minPrice.value;
}

function updatePriceRanges() {
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    const minPriceInput = document.getElementById('min-price-input');
    const maxPriceInput = document.getElementById('max-price-input');

    if (parseInt(minPriceInput.value) > parseInt(maxPriceInput.value)) {
        minPriceInput.value = maxPriceInput.value;
    }

    minPrice.value = minPriceInput.value;
    maxPrice.value = maxPriceInput.value;

    minPrice.max = maxPrice.value;
    maxPrice.min = minPrice.value;
}
