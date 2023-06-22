document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".teaser");

  video.addEventListener("ended", function () {
    video.currentTime = 0; // Сбросить текущую позицию видео на начало
    video.play(); // Запустить видео снова
  });
});

$(document).ready(function () {
  $("#pagepiling").pagepiling({
    verticalCentered: false,
    scrollingSpeed: 100,
    navigation: false,
  });
});
