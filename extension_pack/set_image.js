document.addEventListener('DOMContentLoaded', function() {
  set_body_styles();

  var image_container = document.getElementById("background-image");
  var bottom_container = document.getElementsByClassName("bottom-container")[0];
  var name_container = document.getElementsByClassName("name-container")[0];
  var episode_info_container = document.getElementsByClassName("episode-info-container")[0];

  set_name_container(name_container);
  set_episode_info_container(episode_info_container);
  set_bottom_container_styles(bottom_container);
  set_image_container_styles(image_container);
});

function set_body_styles() {
  document.body.style.padding = "0";
  document.body.style.height = "100%";
  document.body.style.width = "100%";
  document.body.style.margin = "0";
}

function set_image_container_styles(image_container) {
  image_path = randomize_image();
  image_container.style.backgroundImage = image_path;
  image_container.style.opacity = "0.9";
  image_container.style.width = "100%";
  image_container.style.height = "100%";
  image_container.style.backgroundSize = "cover";
}

function set_name_container(name_container) {
  name_container.style.fontSize = "15px";
  name_container.style.color = "whitesmoke";
  name_container.style.paddingRight = "200px";
}

function set_episode_info_container(episode_info_container) {
  episode_info_container.style.fontSize = "15px";
  episode_info_container.style.color = "whitesmoke";
  episode_info_container.style.paddingLeft = "200px";
}

function set_bottom_container_styles(bottom_container) {
  bottom_container.style.display = "flex";
  bottom_container.style.alignItems = "baseline";
  bottom_container.style.position = "absolute";
  bottom_container.style.bottom = "0";
  bottom_container.style.width = "100%";
  bottom_container.style.justifyContent = "space-between";
}

function randomize_image() {
  var base_string = "url('images/friends_";
  var random_int = getRandomInt(1,9).toString();
  var result = base_string.concat(random_int).concat(".jpg')");
  return result;
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
