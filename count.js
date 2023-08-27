const textArea = document.getElementById("text-area");
const count = document.getElementById("count");
const text = document.getElementById("text");

let result = 0

textArea.addEventListener("input", (item) => {
    let data = textArea.value
    jumlah_kata = []  

    jumlah_karakter = data.replace(/^\s+|\s+$/gm, ' ')
 
    count.innerHTML = jumlah_karakter.length

    let parse = data.split(' ')

    for (let item of parse) {
        if (item !== ' ') {
            jumlah_kata.push(item)
        }
    }
    text.innerHTML = jumlah_kata.length - 1
})
