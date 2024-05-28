
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



let hv = 0;
function heavy(title) {
    
    let html = `
  <div class="heavy-text">${title}
    <div></div> ₹ 1599.00</div>
    <div class=" heavy-slider purchase_size_available">
      <div class=" heavy-pursize ">XS</div>
      <div class=" heavy-pursize ">S</div>
      <div class=" heavy-pursize ">M</div>
      <div class=" heavy-pursize ">L</div>
      <div class=" heavy-pursize ">XL</div>
      <div class=" heavy-pursize ">XXL</div>
    </div>
 `
    let z=document.getElementsByClassName("heavy-data")
    z[hv].innerHTML = z[hv].innerHTML + html;
   

    hv=hv+1;
}
heavy("Textured Champion Arc Oversized Fit T-shirt")
heavy("Textured Heavy Weight OVRLS Relaxed fit T-shirt")
heavy("Textured Heavy Weight Arise Relaxed Fit T-shirt")
heavy("Textured Warrior Arc Oversized Fit T-shirt")
heavy("Textured Arc Fawn Oversized Fit T-shirt")
heavy("Textured Arc Grey Oversized Fit T-shirt")
heavy("Textured Arc Brown Oversized Fit T-shirt")
heavy("Fawn Summer Coord Set ")
heavy("Brown Summer Coord Set ")
heavy("Grey Summer Coord Set")
heavy("Raven Summer Coord Set")