const images = [
    "0.jpg", "2.jpg","3.jpg","4.jpg","5.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const bgImage = document.createElement("img");



document.body.style.backgroundImage = `url('img/${chosenImage}')`;