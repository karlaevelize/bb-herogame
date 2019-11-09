//Hero object

let hero = {
    name: "Merlin",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2
    }
}

let dagger = {
    type: "dagger",
    damage: 2
}

//Function Rest

function rest(person) {
if (person.health != 10) {
    person.health = 10
} else {
    alert ("You are as health as a wizard can be!")
    }
    return person
}

//Function pickUpItem

function pickUpItem(person, weapon) {
    person.inventory.push(weapon)
    return person
}

//Function equipWeapon

function equipWeapon(person) {
    if (person.inventory[0]) {
        person.weapon = person.inventory[0]
    }
    if (!person.inventory[0]){
        return null
    }
    
}

// //Function changeName
// function changeName(params) {
//     let yourName = prompt("An extraordinary journey awaits you. How may I address you?")
// }


//Function displayStats