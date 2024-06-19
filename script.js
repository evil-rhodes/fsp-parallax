document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('video');
  const scrollContainer = document.getElementById('scroll-container');

  // Create a ScrollMagic Controller
  const controller = new ScrollMagic.Controller();

  // Create a ScrollMagic Scene
  const scene = new ScrollMagic.Scene({
    duration: scrollContainer.offsetHeight - window.innerHeight
  })
    .on('progress', function (event) {
      const progress = event.progress; // 0 to 1
      const videoDuration = video.duration;
      video.currentTime = progress * videoDuration;
    })
    .addTo(controller);

  // Pause the video initially
  video.pause();

  // Prevent default scroll behavior of video
  video.addEventListener('timeupdate', function () {
    video.pause();
  });
});
