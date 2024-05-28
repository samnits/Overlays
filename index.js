// const imgChange=()=>{

// }
// document.getElementById('img1').addEventListener("onclick",imgChange)




// let x = document.querySelector(".nav3layer")
// x.addEventListener('click', () => {
//     let y = document.querySelector(".sidebar");
//     y.classList.toggle("sidelist");
//     let z = document.querySelector(".xls");
//     z.classList.toggle("list-main-item");

// })
// let x1 = document.querySelector(".sidelist-cross")
// x1.addEventListener('click', () => {
//     let y1 = document.querySelector(".sidebar");
//     y1.classList.toggle("sidelist");
//     let z1 = document.querySelector(".xls");
//     z1.classList.toggle("list-main-item");

// })






// let x = document.querySelector(".fa-envelope")
// x.addEventListener('click', () => {
//     let y = document.querySelector(".messageinfo");
//     y.classList.toggle("messageinfohere");

// })
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

// method to change immage after every 3 second
var index = 0;
change();

function change() {
    //Collect all images with class 'slides'
    var x = document.getElementsByClassName('imgslide');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index++;
    if (index > x.length) { index = 1; }
    x[index - 1].style.display = "block";
    setTimeout(change, 3000);
}
var index_hv = 0;
hv_change();

function hv_change() {
    //Collect all images with class 'slides'
    var x = document.getElementsByClassName('hv_imgslide');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index_hv++;
    if (index_hv > x.length) { index_hv = 1; }
    x[index_hv - 1].style.display = "block";
    setTimeout(hv_change, 3000);
}


let cc = 0;
function createCard(title) {
    
    let html = `
  <div class="img-text">${title}
    Sale price <div></div> ₹ 999.00</div>
    <div class=" image-slider purchase_size_available">
      <div class=" pursize ">XS</div>
      <div class=" pursize ">S</div>
      <div class=" pursize ">M</div>
      <div class=" pursize ">L</div>
      <div class=" pursize ">XL</div>
    </div>
 `
    let z=document.getElementsByClassName("main-container")
    z[cc].innerHTML = z[cc].innerHTML + html;
   

    cc=cc+1;
}
createCard("Free Spirit Relaxed Fit T-shirt - Ultra Soft")
createCard("Blossom Relaxed Fit Ultra Soft T-shirt")
createCard("Textured Regular Fit Navy Blue Pique T-shirt")
createCard("Textured Regular Fit Navy Blue Pique T-shirt")


let jl = 0;
function justLaunched(title) {
    
    let html = `
  <div class="just-text">${title}
    Sale price <div></div> ₹ 999.00</div>
    <div class=" just-launched-slider purchase_size_available">
      <div class=" just-pursize ">XS</div>
      <div class=" just-pursize ">S</div>
      <div class=" just-pursize ">M</div>
      <div class=" just-pursize ">L</div>
      <div class=" just-pursize ">XL</div>
    </div>
 `
    let z=document.getElementsByClassName("just-launched-data")
    z[jl].innerHTML = z[jl].innerHTML + html;
   

    jl=jl+1;
}
justLaunched("The Evolve Relaxed Fit T-shirt - Ultra Soft")
justLaunched("The Wild Relaxed Fit T-shirt - Ultra Soft")
justLaunched("The Predator Relaxed Fit T-shirt - Ultra Soft")
justLaunched("Guardian Wings Relaxed Fit T-shirt - Ultra Soft")
justLaunched("The Mammoth Relaxed Fit T-shirt")
justLaunched("Textured Heavy Weight Arise Relaxed Fit T-shirt")
justLaunched("The Yellow Bloom Relaxed Fit - Ultra Soft T-shirt")
justLaunched("Textured Heavy Weight OVRLS Relaxed fit T-shirt")




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








let jog = 0;
function joggers(title) {
    
    let html = `
  <div class="joggers-text">${title}
    Sale price <div></div> ₹ 1599.00</div>
    <div class=" joggers-slider purchase_size_available">
      <div class=" joggers-pursize ">28</div>
      <div class=" joggers-pursize ">30</div>
      <div class=" joggers-pursize ">32</div>
      <div class=" joggers-pursize ">34</div>
      <div class=" joggers-pursize ">36</div>
      <div class=" joggers-pursize ">38</div>
    </div>
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





// function onHover()
// {   let x=document.getElementById("menuImg");
//     x.attr('src', 'images/slider/s1_back.webp');
// }

// function offHover()
// { 
//     let x=document.getElementById("menuImg");
//     x.attr('src', 'images/slider/s1_front.webp');
// }
// function hover(img){
//  img.src = "images/slider/s1_back.webp"
// };
// function notHover(img){
//     img.src="images/slider/s1_front.webp"
// };
// function hover1(img){
//  img.src = "images/slider/s2_back.webp"
// };
// function notHover1(img){
//     img.src="images/slider/s2_front.webp"
// };
// function hoveron(img,front){
//  img.src = `${front}`
// };
// function notHoveroff(img,back){
//     img.src=`${back}`
// };

// order amount
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
