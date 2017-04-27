// replaceAt function for every string
String.prototype.replaceAt = function (index, char) {
    let a = this.split("")
    a[index] = char
    return a.join("")
}

// check if char is a letter (does not work with special chars ex 'á')
isLetter = (char) => {
    return char.length === 1 && char !== char.toLowerCase()
}

// function to capture user's input and then call the generateResult function
setInput = () => {
    let input = document.getElementById("input").value
    generateResult(input)
}

// create object to associate letters with numbers
const numberLetter = {
    '2': ['A', 'B', 'C'],
    '3': ['D', 'E', 'F'],
    '4': ['G', 'H', 'I'],
    '5': ['J', 'K', 'L'],
    '6': ['M', 'N', 'O'],
    '7': ['P', 'Q', 'R', 'S'],
    '8': ['T', 'U', 'V'],
    '9': ['W', 'X', 'Y', 'Z'],
}

// finds and replaces letters and posts it to div
generateResult = (input) => {
    const inputArray = input.split("")
    inputArray.map((char, index) => {
        if (isLetter(char)) {
            let number
            Object.keys(numberLetter).map((data) => {
                if (numberLetter[data].includes(char)) {
                    number = data
                }
            })
            input = input.replaceAt(index, number)
        }
    })
    document.getElementById("result").innerText = input
}