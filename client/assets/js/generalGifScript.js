const apiKey = "AkieEAtmUH3opEz3lIrtcV3ELMZ3Kmwk";

function getGifs() {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
    fetch(url)
        .then((res) => res.json())
        .then((collection) => {
            console.log(collection);
            const gifContainer = document.querySelector("#gif-container");
            let allGifs = collection.data;

            allGifs.forEach((el) => {
                let imgSrc = el.images.downsized.url;
                let title = el.title;

                let html = `
                <div class="gif">
                    <a id="clcik-gif" href="#">
                        <img class="gif-img" src="${imgSrc}" alt="${title}" />
                    </a>
                </div>
            `;
                gifContainer.insertAdjacentHTML("beforeend", html);
            });

            gifContainer.addEventListener("click", insertGif);
        });
}

document.querySelector(".add-gif").addEventListener("click", getGifs);

function insertGif(e) {
    e.preventDefault();
    let el = e.target;

    const gifImg = document.querySelector("#gif-img");
    gifImg.src = el.src;
    const newPost = document.querySelector("#gif-outer-box");
    newPost.classList.add("active-box");
}

function removeGif(e) {
    e.preventDefault();

    const gifImg = document.querySelector("#gif-img");
    gifImg.src = "";
    const newPost = document.querySelector("#gif-outer-box");
    newPost.classList.remove("active-box");
}

document.querySelector("#remove-gif").addEventListener("click", removeGif);

const textarea = document.querySelector("#new-post-general");
const letterCount = document.querySelector("#remainig-letters");
let maxLen = 500;

textarea.addEventListener("input", () => {
    let letters = textarea.value.length;
    letterCount.textContent = maxLen - letters;
});

textarea.addEventListener("focus", () => {
    letterCount.style.display = "block";
    let letters = textarea.value.length;
    letterCount.textContent = maxLen - letters;
    console.log(letters);
});

textarea.addEventListener("focusout", () => {
    letterCount.style.display = "none";
});

const bubbleBox = document.querySelector("#bubble-box");

document.querySelector("#add-emoji-post").addEventListener("click", (e) => {
    e.preventDefault();
    bubbleBox.classList.toggle("appear");
});

let emojiArray = [...document.querySelectorAll(".emoji")];

emojiArray.forEach((el) => {
    el.addEventListener("click", (e) => {
        textarea.value = textarea.value + e.target.innerText;
    });
});
