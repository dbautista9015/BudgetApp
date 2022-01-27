export default function MakeCard() {

    let injectHere = document.getElementById('injectHere');

    let card = document.createElement('div');
    card.className = 'card mb-3';

    let card_body = document.createElement('div');
    card_body.className = 'card-body';

    let h5 = document.createElement('h5');
    h5.className = 'card-title d-flex justify-content-center';
    //Later need the name of the expense from field or local depends

    let p = document.createElement('p');
    p.className = 'card-text d-flex justify-content-center';
    //Later need the amount of expense from field or local depends

    let i = document.createElement('i');
    i.className = 'far fa-trash-alt fa-2x d-flex justify-content-center';

    injectHere.appendChild(card);
    card.appendChild(card_body);
    card_body.appendChild(h5);
    card_body.appendChild(p);
    card_body.appendChild(i);


}