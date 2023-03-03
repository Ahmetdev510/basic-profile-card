const tag = document.querySelector(".container .box .discord-tag");

let tagText;
tag.addEventListener("click", () => {
    if(!tagText) tagText = tag.textContent;
    tag.innerHTML = `<i class="fa-solid fa-circle-check"></i> Copied!`;
    setTimeout(() => {
        tag.innerHTML = tagText;
    }, 3*1000);
});