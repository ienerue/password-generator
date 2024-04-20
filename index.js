const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")

function generatePasswords() {
    let first = []
    let second = []
    firstPassword.textContent = ""
    secondPassword.textContent = ""
    for (let i = 0; i < 31; i++) {
        if (first.length < 16) {
            let random =  Math.floor( Math.random() * characters.length )
            first.push(characters[random])
            firstPassword.textContent += characters[random]
        } else {
            let random =  Math.floor( Math.random() * characters.length )
            second.push(characters[random])
            secondPassword.textContent += characters[random]
        }
    }
}