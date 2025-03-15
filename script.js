let images = [
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/033/352/415/small_2x/bright-reflection-macro-background-close-ai-generated-photo.jpg",
    "https://i.pinimg.com/originals/b5/6c/3c/b56c3ca44ed0e173e11ef11d9a7a4827.jpg",
    "https://images8.alphacoders.com/449/449444.jpg",
    "https://i.ytimg.com/vi/IUN664s7N-c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCK23ncwZjjd8IisSnQeSXEp5ZjXw"
];
let currentIndex = 0;
let mainImg = document.getElementById("main-img");

function setImage(index) {
    currentIndex = index;
    mainImg.src = images[currentIndex];
}

function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    mainImg.src = images[currentIndex];
}