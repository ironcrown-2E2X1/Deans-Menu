const images = [
  { src: "./Images/LB Hot Bev Portrait 0626.PNG", duration: 1000 }, // 1 second
  { src: "./Images/LB Hot Bevs Horizontal 0626.PNG", duration: 3000 }, // 3 seconds
  { src: "./Images/LB Iced Bevs Horizontal 0626.PNG", duration: 2000 }  // 2 seconds
];



let index = 0;

function showImage() {
  const imgElement = document.getElementById("slideshow");
  const current = images[index];

  imgElement.src = current.src;

  index = (index + 1) % images.length;

  setTimeout(showImage, current.duration);
}

// Start
showImage();