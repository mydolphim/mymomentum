//random Background

const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `img/${chosenImages}`;

document.body.appendChild(image)