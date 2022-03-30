fetch('http://rekrutacjartb.pl/developer/banner.json')
    .then(response => response.json())
    .then(result => {
        let offers = ""
        for (let i = 0; i < 4; i++) {
             offers += `
                <div class="product" id="product${[i]}">
                    <img class="image" src=http:${result.offers[i].imgURL} >
                    <p class="price">${result.offers[i].price} ${result.offers[i].currency}</p>
                </div>
            `;
        document.querySelector('.offers').innerHTML = offers;
    
        let counter = 0

        setTimeout(() => {
            if (counter < 4) {
                document.getElementById("product"+counter).style.borderColor = "a8a8a8";
                counter++;
            }
            else {
                secondcounter = 0;
            }
            setInterval(function() {
            if (counter < 4) {
                document.getElementById("product"+counter).style.borderColor = "a8a8a8";
                counter++;
            }
            else {
                secondcounter = 0;
            }
            }, 2000)
        }, 4000)

        let secondcounter = 0;

        setInterval(function(){ 
            if (secondcounter < 4) {
                document.getElementById("product"+secondcounter).style.borderColor = "ffff00";
                secondcounter++;
            } else {
                secondcounter = 0;
            }
        }, 2000);

    }
});