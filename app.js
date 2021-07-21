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
    // Decides which way to walk.
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
    // Waits 3 sec.
    await new Promise(r => setTimeout(r, 3000));
    // Gets the pokémon element (if it exists), if not, then = null
    poke = document.getElementById('dexy');
    if (poke != null) {
        console.log(poke.innerText); // Name of the pokémon
        // Gets the star that shows it's a legendary (if it exists), if not, then = undefined
        star = document.getElementsByClassName("fas fa-star spicon spib")[0]
        if (star != undefined){
            const c = document.querySelector('.btn-catch-action') // Catch button
            c.click()
            a =  false; // Breaks the loop.
            alert('You have found a Legendary Pokémon'); // Stops the script until hits 'ok'.
        } else {
        a = true;
    }
    }
    
}
//


// STAR
// <i class="fas fa-star spicon spib" aria-hidden="true" data-toggle="tooltip" data-placement="right" title="" data-original-title="This is considered a Legendary Pokemon"></i>
// document.getElementsByClassName("fas fa-star")[0]


// Road to catch:

// <input class="btn-battle-action" type="submit" name="Start Battle" value="Start Battle">

// <input type="radio" name="selectitem" value="masterball" id="item-masterball">

// <input class="btn-battle-action" type="submit" value="Throw Pokeball" name="useitem_">