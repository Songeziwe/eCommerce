const mainImage = document.getElementById('main-image');
const smallImages = document.getElementsByClassName('small-img');

for (let index = 0; index < smallImages.length; index++) {
  smallImages[index].onclick = function() {
    mainImage.src = smallImages[index].src;
  };
}

