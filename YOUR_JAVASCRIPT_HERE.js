// Write your JS here

//Hero object

let hero = {
    name: "Harry Potter",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2
    }
}

//Functions `rest, pickUpItem and equipWeapon` are all defined
//Game logic functions

function rest(hero) {
if (hero.health != 10) {
    hero.health = 10
} else {
    alert ("health property of person already has the value 10")
    }
    return hero
}

function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon)
}

function equipWeapon(hero) {
    
}