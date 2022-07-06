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
    newPost.classList.add("gif-outer-box");
}
