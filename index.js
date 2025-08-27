// love count
const hearts = document.getElementsByClassName('red-heart')
for (const heart of hearts) {
    heart.addEventListener('click', function () {

        const heratCount = document.getElementById('heartCount').innerText
        let value = Number(heratCount)
        value++
        document.getElementById('heartCount').innerText = value


    })

}
// copy button 
const copies = document.getElementsByClassName('copy-btn')
for (const copy of copies) {
    copy.addEventListener('click', function () {

        const copyCount = document.getElementById('copyCount').innerText
        let value = Number(copyCount)
        value++
        document.getElementById('copyCount').innerText = value
        const mainCopy = copy.parentNode.parentNode.children[1].children[2].innerText
        navigator.clipboard.writeText(mainCopy)
        console.log(mainCopy);

        alert(`Number has been copied : ${mainCopy}`)



    })

}

// call button
let coinCount = 100;
const buttons = document.getElementsByClassName('common-calls')
for (const button of buttons) {
    button.addEventListener('click', function () {
        console.log("button clicked");
        const hotLineName = button.parentNode.parentNode.children[1].children[0].innerText
        const hotLineNumber = button.parentNode.parentNode.children[1].children[2].innerText
        console.log(hotLineNumber);
        const time = new Date().toLocaleTimeString();

        const newcart = document.createElement('div')
        newcart.innerHTML = `<div class="bg-gray-100 flex justify-between items-center p-3 mb-3 rounded-lg">
            <div>
                <h1 class="text-sm font-extrabold">${hotLineName}</h1>
                <p >${hotLineNumber}</p>
            </div>
            <p class="text-sm"> ${time}</p>
        </div>
        `
        const parrentCart = document.getElementById('parrent-container')
        parrentCart.append(newcart)

        alert(`📞 calling ${hotLineName} ${hotLineNumber}...`)


        if (coinCount < 20) {
            alert("Not enough coins to make a call!");
            newcart.innerHTML = ''
            return;
        }

        coinCount -= 20;
        document.getElementById("coinCount").innerText = coinCount;


    })

}

// clear button 
document.getElementById('clear-btn')
    .addEventListener('click', function () {
        document.getElementById('parrent-container').innerHTML = ''
    })