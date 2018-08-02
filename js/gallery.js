function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  // querySelector("#gallery-thumbs");
  // querySelectorAll("img"); Replaced, was 2 lines. See above.
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
      // Preload large images (to avoid delay after clicking):
      let newImageSrc = thumbnail.dataset.largeVersion;
      let largeVersion = new Image();
      largeVersion.src = newImageSrc;

      
    thumbnail.addEventListener("click", function() {
      // Set clicked image as main image.     
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);
      // Selecting the image that's current (red frame):
      let currentClass = "current";
      document.querySelector(`.${currentClass}`).classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);
      // Changing the information in the right column:
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");
      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}