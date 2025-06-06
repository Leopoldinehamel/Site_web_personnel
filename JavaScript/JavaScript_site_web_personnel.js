const images = [
    "./Images/IMG_2203.jpeg",
    "./Images/IMG_2248.jpeg",
    "./Images/IMG_2390.jpeg",
    "./Images/IMG_5446.jpeg"
];

let currentIndex = 0;

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("carousel-image").src = images[currentIndex];
}

window.onload = function () {
    document.getElementById("carousel-image").src = images[currentIndex];
};