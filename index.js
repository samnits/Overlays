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
let cc = 0;
// function createCard(title, front, back) {
//     let html = `<div class="circle-container">
//     <div class="img-circle-container">
//         <img src="${front}" class="imgcc1" alt="">
//     </div>
//     <div class="circle-container-text">${title}"</div>
// </div>
//  `

//     let z=document.getElementsByClassName("circle-main-container")
//     z[cc].innerHTML = z[cc].innerHTML + html;


//     cc=cc+1;
// }
// createCard("Sweatshirt", "https://overlays.co/cdn/shop/files/20230805-DSC03525.jpg?v=1692105098&width=400", "https://overlays.co/cdn/shop/files/20230805-DSC03541.jpg?v=1692105098&width=500")


// function onHover()
// {   let x=document.getElementById("menuImg");
//     x.attr('src', 'images/slider/s1_back.webp');
// }

// function offHover()
// { 
//     let x=document.getElementById("menuImg");
//     x.attr('src', 'images/slider/s1_front.webp');
// }
function hover(img){
 img.src = "images/slider/s1_back.webp"
};
function notHover(img){
    img.src="images/slider/s1_front.webp"
};
function hover1(img){
 img.src = "images/slider/s2_back.webp"
};
function notHover1(img){
    img.src="images/slider/s2_front.webp"
};

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
