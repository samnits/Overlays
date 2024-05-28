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

let jl = 0;
function justLaunched(title,price) {
    
    let html = `
  <div class="just-text">${title}
     <div></div> ₹ ${price}</div>
  
 `
    let z=document.getElementsByClassName("just-launched-data")
    z[jl].innerHTML = z[jl].innerHTML + html;
   

    jl=jl+1;
}
let jl2 = 0;
function justLaunched2(title,price) {
    
    let html1 = `
  <div class="slide-text">${title}
     <div></div> ₹ ${price}</div>
  
 `
    let z=document.getElementsByClassName("just-launched-data-2")
    z[jl2].innerHTML = z[jl2].innerHTML + html1;
   

    jl2=jl2+1;
}
justLaunched("Purple Fitted Crop Top","499.00")
justLaunched("Black Fitted Crop Top","499.00")
justLaunched("Sleeveless Orange Crop Top","449.00")
justLaunched("Relaxed Fit Raglan Lilac Crop Top","449.00")
justLaunched("Relaxed Fit Raglan Nude Crop Top","499.00")
justLaunched("Baby Blue Fitted Crop Top","499.00")
justLaunched("Relaxed Fit Brick Crop Top","499.00")

// slider 2
justLaunched2("Baby Blue Fitted Crop Top","699.00");
justLaunched2("Arise Relaxed Fit T-shirt","999.00")
justLaunched2("Black Fitted Crop Top","489.00")
justLaunched2("Black Arc Oversized T-Shirt","1499.00")

let o = document.querySelector(".quan_positive")
o.addEventListener('click', () => {
    let p = document.querySelector(".quan_amount");
    let p1=parseInt(p.innerHTML)
    p1=p1+1;
    p.innerHTML=p1;
})

let o1 = document.querySelector(".quan_negative")
o1.addEventListener('click', () => {
    let n = document.querySelector(".quan_amount");
    let n1=parseInt(n.innerHTML)
    
    if(n1===1){
        n.innerHTML=1;
    }
    else{
        n1=n1-1;
        n.innerHTML=n1;
    }
    
})
