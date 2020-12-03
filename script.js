const box = document.querySelector('.box');
box.addEventListener('click', toggleColor);

function toggleColor() {
    if (document.querySelector(".box").style.backgroundColor == "black"){
      document.querySelector(".box").style.backgroundColor = "white";
    } else{
        document.querySelector(".box").style.backgroundColor = "black"
    }
}


