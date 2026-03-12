const grid = document.getElementById("emojiGrid")
const favorites = document.getElementById("favorites")

const emoji = "🥥"

function spawnCoconuts(){

    for(let i = 0; i < 500; i++){

        const box = document.createElement("div")
        box.className = "unicode-box"

        box.innerHTML = `
        ${emoji}
        <div class="unicode-code">U+1F965</div>
        `

        box.onclick = () => {

            navigator.clipboard.writeText(emoji)

            const fav = document.createElement("span")
            fav.textContent = emoji
            fav.style.fontSize = "24px"

            favorites.appendChild(fav)

        }

        grid.appendChild(box)

    }

}

spawnCoconuts()