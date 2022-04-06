fetch("http://rekrutacjartb.pl/developer/banner.json", {mode: "cors"})
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

        let animation = anime.timeline({
            duration: 2000, 
            easing: 'easeInOutSine',  
            loop: true
          });           
            
          animation.add({
            targets: '#product0',
            keyframes: [
              {borderColor: 'ffff00' },
              {borderColor: 'a8a8a8'}
            ]
          }).add({
            targets: '#product1',
            keyframes: [
              {borderColor: 'ffff00' },
              {borderColor: 'a8a8a8'}
            ]
          }, '-=100').add({
            targets: '#product2',
            keyframes: [
              {borderColor: 'ffff00' },
              {borderColor: 'a8a8a8'}
            ]
          }, '-=200').add({
            targets: '#product3',
            keyframes: [
              {borderColor: 'ffff00' },
              {borderColor: 'a8a8a8'}
            ]
        }, '-=300');
    }
});