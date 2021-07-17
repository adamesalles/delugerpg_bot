let a = true
let up = document.getElementById('dr-n');
while (a){
    up.click();
    await new Promise(r => setTimeout(r, 3000));
    let poke = document.getElementById('dexy');
    if (poke != null) {
        console.log(poke.href);
        if (poke.href == 'https://www.delugerpg.com/pokedex/info/articuno'){ // Change to the pokedex url.
            c = document.getElementById('catch')
            c.click()
            a =  false;
        } else {
        a = true;
    }
    }
    
}