document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.querySelector('.fa-envelope');
    const popupContainer = document.getElementById('popupContainer');
    const closePopupBtn = document.getElementById('closePopupBtn');

    openPopupBtn.addEventListener('click', () => {
        popupContainer.style.display = 'flex';
    });

    closePopupBtn.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });
});
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




let jog = 0;
function joggers(title) {
    
    let html = `
  <div class="joggers-text">${title}
    Sale price <div></div> ₹ 1599.00</div>
  
 `
    let z=document.getElementsByClassName("joggers-data")
    z[jog].innerHTML = z[jog].innerHTML + html;
   

    jog=jog+1;
}
joggers("The Evolve Relaxed Fit T-shirt - Ultra Soft")
joggers("The Wild Relaxed Fit T-shirt - Ultra Soft")
joggers("The Predator Relaxed Fit T-shirt - Ultra Soft")
joggers("Guardian Wings Relaxed Fit T-shirt - Ultra Soft")
joggers("The Mammoth Relaxed Fit T-shirt")
joggers("Textured Heavy Weight Arise Relaxed Fit T-shirt")
joggers("The Yellow Bloom Relaxed Fit - Ultra Soft T-shirt")
joggers("Textured Heavy Weight OVRLS Relaxed fit T-shirt")