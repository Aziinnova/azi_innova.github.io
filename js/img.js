const imageInput = document.getElementById('imageInput');
const selectedImage = document.getElementById('selectedImage');

imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function(event) {
      selectedImage.src = event.target.result;
    };

    reader.readAsDataURL(file);
  }
});

