let btnNext = document.querySelector("#gallery .buttons .next");
let btnPrev = document.querySelector("#gallery .buttons .prev");
let photos = document.querySelectorAll("#gallery .photos img");
let i = 0;

btnNext.onclick = function () {
    photos[i].style.display = 'none';
    i++;
    if (i >= photos.length) {
        i = 0;
    }
    photos[i].style.display = 'block';

}


btnPrev.onclick = function () {
    photos[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    photos[i].style.display = 'block';
}

