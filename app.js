// Copy this part first
let a = true
const up = document.getElementById('dr-n');
const down = document.getElementById('dr-s');
const left = document.getElementById('dr-w');
const right = document.getElementById('dr-e');
let poke = null;
let star = undefined;
let count = 0;
//


// Copy this part next
while (a){
    switch (count){
        case 0:
            left.click();
            count++;
            break;
        case 1:
            down.click();
            count++;
            break;
        case 2:
            right.click();
            count++;
            break;
        case 3:
            up.click();
            count++;
            break;
        case 4:
            count = 0;
            break;
    }
    await new Promise(r => setTimeout(r, 3000));
    poke = document.getElementById('dexy');
    if (poke != null) {
        console.log(poke.innerText);
        star = document.getElementsByClassName("fas fa-star spicon spib")[0]
        if (star != undefined){
            const c = document.querySelector('.btn-catch-action')
            c.click()
            a =  false;
            alert('Você encontrou um lendário.')
        } else {
        a = true;
    }
    }
    
}
//

// Road to catch:

// <i class="fas fa-star spicon spib" aria-hidden="true" data-toggle="tooltip" data-placement="right" title="" data-original-title="This is considered a Legendary Pokemon"></i>

// document.getElementsByClassName("fas fa-star")[0]

// <input class="btn-battle-action" type="submit" name="Start Battle" value="Start Battle">

// <input type="radio" name="selectitem" value="masterball" id="item-masterball">

// <input class="btn-battle-action" type="submit" value="Throw Pokeball" name="useitem_">