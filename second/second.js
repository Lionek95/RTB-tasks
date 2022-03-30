fetch("http://rekrutacjartb.pl/developer/banner.json", {mode: "cors"})
    .then(response => response.json())
    .then(result => {
        let slides = ""
        for (let i = 1; i < 4; i++) {
            slides += `
                <div class="slide" id="slide${[i]}">
                    <img class="image" src=http:${result.offers[i].imgURL} >
                    <h2 class="name">${result.offers[i].name}</h2>
                    <p class="price">${result.offers[i].price} ${result.offers[i].currency}</p>
                    <button type="button">Check</button>
                </div>
            `;
        document.querySelector(".slides").innerHTML = slides;

        let radioFirst = document.createElement("input");
        radioFirst.type = "radio";
        radioFirst.name = "radio-btn";
        radioFirst.id = "radio1";

        let radioSecond = document.createElement("input");
        radioSecond.type = "radio";
        radioSecond.name = "radio-btn";
        radioSecond.id = "radio2";

        let radioThird = document.createElement("input");
        radioThird.type = "radio";
        radioThird.name = "radio-btn";
        radioThird.id = "radio3";

        document.querySelector(".slides").prepend(radioFirst, radioSecond, radioThird);

        document.querySelector("#slide1").classList.add("first");

        let counter = 1;
        setInterval(function(){
        document.getElementById("radio"+counter).checked = true;
        counter++;
        if(counter > 3){
          counter = 1;
        }
        }, 2000);
    }
});