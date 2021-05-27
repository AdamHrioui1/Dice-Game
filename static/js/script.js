const repeat = document.getElementById("repeat");
const roll = document.getElementById("roll");
const logout = document.getElementById("logout");
const score = document.getElementById("score");
const img = document.getElementById("img");
const total = document.getElementById("total");
const score_page = document.getElementById("score_page");

var counter = 0;
var total_score = 0;
var random_number = Math.floor(Math.random() * 6 + 1)

var score_historique = [];

roll.addEventListener("click", roll_it)

function roll_it(e) {
        e.preventDefault();
    
        random_number = Math.floor(Math.random() * 6 + 1);
        img.style.backgroundImage = `url(static/img/${random_number}.png)`;
    
        if(random_number == 1){
            score_historique.push(total_score);

            let h1 = document.createElement("h1");
            h1.innerText = total_score;
            score_page.append(h1)

            roll.removeEventListener("click", roll_it);
            total.innerHTML = `Your score : ${total_score}`;
        }
        else{
            total_score += random_number;
        }
        score.innerHTML = `Score : ${total_score}`;

        //console.log(score_historique);

        /*for(let i = 0; i < score_historique.length; i++){
            score_page.innerText += `<p>${score_historique[i]}</p>`;
            console.log(score_historique[i]);
        }*/

}

logout.addEventListener("click", e => {
    e.preventDefault();
    window.location.pathname = "/";
})


repeat.addEventListener("click", e => {
    e.preventDefault();
    roll.addEventListener("click", roll_it);
    total_score = 0;
})
