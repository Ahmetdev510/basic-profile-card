const tag = document.querySelector(".container .box .discord-tag");

let tagText;
tag.addEventListener("click", () => {
    if(!tagText) tagText = tag.textContent;
    navigator.clipboard.writeText(tagText).then(()=>{
        tag.innerHTML = `<i class="fa-solid fa-circle-check"></i> Copied!`;
        setTimeout(() => tag.innerHTML = tagText, 3*1000);
    }).catch(err=>console.log(err));
});
