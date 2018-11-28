document.addEventListener('DOMContentLoaded', () => {

  let button = document.querySelector('.button');
  let body = document.querySelector('body');
  let deckId;
  let a;
  let imgContainer = document.createElement('div');

  body.appendChild(imgContainer);

  button.addEventListener('click', () => {

    function getCardsId() {
      axios
        .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => {
          deckId = res.data.deck_id;
          //took the information from the res and assigned it
          //succesful response = resolved promise
        })
        .then(drawCards)
        .catch(err => {
          console.log('Error');
        });
    }

    function drawCards() {
      axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
      .then(res => {

        res.data.cards.forEach(function (element) {
          a = document.createElement('a');
          let img = document.createElement('img');
          img.src = element.image;
          a.appendChild(img);
          imgContainer.appendChild(a);
        });

        // while (a.firstChild) {
        //   a.removeChild(a.firstChild);
        //   // console.log(a.firstChild, 'this');
        // }

      });
    }

    getCardsId();

  });
});
