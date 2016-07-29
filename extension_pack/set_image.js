document.addEventListener('DOMContentLoaded', function() {
  set_body_styles();

  var image_container = document.getElementById("background-image");
  set_image_container_styles(image_container);
});

function set_body_styles() {
  document.body.style.padding = "0";
  document.body.style.height = "100%";
  document.body.style.width = "100%";
  document.body.style.margin = "0";
}

function set_image_container_styles(image_container) {
  image_container.style.backgroundColor = 'red';
  image_container.style.width = "100%";
  image_container.style.height = "100%";
  image_container.style.backgroundSize = "cover";
}
