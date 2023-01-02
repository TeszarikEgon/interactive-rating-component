let buttons = document.getElementsByClassName("button");
let rating = 0;

//choose rating

for(let i=0; i<5; i++){
    buttons[i].addEventListener("click", getRating);
}


function getRating(e){

    if (rating!=0){
        buttons[rating-1].style.backgroundColor = "var(--DarkBlue)";
    }

    rating = (e.target.getAttribute('data-rate'));

    buttons[rating-1].style.backgroundColor = "var(--Orange)";
    buttons[rating-1].style.color = "var(--White)";
    
    
}

//Submit your rating & show appreciate card

document.getElementById("submit").addEventListener("click", () =>{
        document.getElementById("appreciate").style.zIndex="2";
        document.getElementById("userRating").innerHTML =  `You selected ${rating} out of 5`;
});








