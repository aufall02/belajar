const circles = document.querySelectorAll(".circle");
const title = document.getElementById("title");
const btnRiset =  document.getElementById("btn-reset");
const btnCount =  document.getElementById("btn-count");

circles.forEach((circle) => {
    changeBackround(circle);
});

btnRiset.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    title.classList.remove("white");
});


btnCount.addEventListener("click", () => {
    window.location.href = "count_text.html"
});

function changeBackround(item) {
    item.addEventListener("click", ({ target }) => {
        //cek apakah circlenny ada class yang warnanya tabrakan dengan backround
        if (item.className.includes("persian-green")) {
            title.classList.add("white");
        } else {
            title.classList.remove("white");
        }
        //ganti backround
        const { backgroundColor } = getComputedStyle(target);
        document.body.style.backgroundColor = backgroundColor;
    });
}
