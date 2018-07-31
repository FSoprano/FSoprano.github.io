function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  // querySelector("#gallery-thumbs");
  // querySelectorAll("img"); Replaced, was 2 lines. See above.
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      
      
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);
    });
  });
}