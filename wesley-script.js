const video =
  document.getElementById("paper-video");

const content =
  document.getElementById("wesley-content");

const intro =
  document.getElementById("intro-screen");

const stops = [
  0.33,
  0.66,
  1.0
];

let stage = 0;

video.pause();

document.addEventListener("click", () => {

  if (stage >= stops.length) return;

  const target = stops[stage];

  video.play();

  const checker = setInterval(() => {

    if (video.currentTime >= target) {

      video.pause();

      clearInterval(checker);

      stage++;

      if (stage === stops.length) {

        setTimeout(() => {

          intro.style.display = "none";

          content.style.display = "block";

          document.body.style.overflow = "auto";

        }, 500);

      }

    }

  }, 20);

});
