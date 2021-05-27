const repeat = document.getElementById("repeat");
const roll = document.getElementById("roll");
const logout = document.getElementById("logout");
const score = document.getElementById("score");
const img = document.getElementById("img");

var counter = 0;
var total_score = 0
var random_number = Math.floor(Math.random() * 7)

repeat.addEventListener("click", e => {
    e.preventDefault();
    window.location.pathname = "/game";
})

roll.addEventListener("click", roll_it)

function roll_it(e) {
        e.preventDefault();
    
        random_number = Math.floor(Math.random() * 6 + 1);
        img.style.backgroundImage = `url(static/img/${random_number}.png)`;
    
        if(random_number == 1){
            roll.removeEventListener("click", roll_it);
        }
        else if(random_number == 2){
            total_score += random_number;
        }
        else if(random_number == 3){
            total_score += random_number;
        }
        else if(random_number == 4){
            total_score += random_number;
        }
        else if(random_number == 5){
            total_score += random_number;
        }
        else{
            total_score += random_number;
        }
    
        console.log(total_score);
}

logout.addEventListener("click", e => {
    e.preventDefault();
    location.pathname = "/";
})
