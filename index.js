// const imgChange=()=>{
    
// }
// document.getElementById('img1').addEventListener("onclick",imgChange)

console.log("helllo");
let x=document.querySelector(".nav3layer")
x.addEventListener('click',()=>{
    let y=document.querySelector(".sidebar");
    y.classList.toggle("sidelist");
})
console.log("helllo");

// method to change immage after every 3 second
var index = 0;
change();

function change() {

    //Collect all images with class 'slides'
    var x = document.getElementsByClassName('imgslide');


    for(var i = 0; i < x.length; i++) { 
        x[i].style.display = "none"; 
    }

    index++;


    if(index > x.length) { 
        index = 1; 
    }

  
    x[index - 1].style.display = "block";


    setTimeout(change, 3000);
}
