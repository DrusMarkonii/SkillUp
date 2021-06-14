// console.log("Sample JavaScript #7 HW #21");
(function (time) {
  const slides = document.querySelectorAll(".slide");
  const pauseButton = document.querySelector("#pause-btn");
  const prevButton = document.querySelector("#prev-btn");
  const nextButton = document.querySelector("#next-btn");
  const indicators = document.querySelectorAll(".indicator");
  const indicatorsContainer = document.querySelector("#indicators-container");
  const CODE_SPACE = "Space";
  const CODE_LEFT_ARROW = "ArrowLeft";
  const CODE_RIGHT_ARROW = "ArrowRight";
  const container = document.querySelector("#carousel");
  const pausePlay = () => (isPlaying ? pause() : play());

  let currentSlide = 0;
  let slidesCount = slides.length;
  let isPlaying = true;
  let interval = time;
  let timerID = null;
  let swipeStartX = null;
  let swipeEndX = null;

  function gotoSlide(n) {
    slides[currentSlide].classList.toggle("active");
    indicators[currentSlide].classList.toggle("active");
    currentSlide = (n + slidesCount) % slidesCount;
    slides[currentSlide].classList.toggle("active");
    indicators[currentSlide].classList.toggle("active");
  }

  function nextSlide() {
    gotoSlide(currentSlide + 1);
  }

  function prevSlide() {
    gotoSlide(currentSlide - 1);
  }

  function next() {
    pause();
    nextSlide();
  }

  function prev() {
    pause();
    prevSlide();
  }

  function pause() {
    if (isPlaying) {
      clearInterval(timerID);
      isPlaying = false;
      pauseButton.innerHTML = "Play";
    }
  }

  function play() {
    timerID = setInterval(nextSlide, interval);
    isPlaying = true;
    pauseButton.innerHTML = "Pause";
  }

  function indicate(e) {
    const target = e.target;

    if (target && target.classList.contains("indicator")) {
      pause();
      gotoSlide(+target.dataset.slideTo);
    }
  }

  function pressKey(e) {
    if (e.code === CODE_LEFT_ARROW) prev();
    if (e.code === CODE_RIGHT_ARROW) next();
    if (e.code === CODE_SPACE) pausePlay();
  }

  function swipeStart(e) {
    swipeStartX = e.changedTouches[0].pageX;
  }

  function swipeEnd(e) {
    swipeEndX = e.changedTouches[0].pageX;
    swipeStartX - swipeEndX > 100 && next();
    swipeStartX - swipeEndX < -100 && prev();
  }

  function initListeners() {
    pauseButton.addEventListener("click", pausePlay);
    prevButton.addEventListener("click", prev);
    nextButton.addEventListener("click", next);
    indicatorsContainer.addEventListener("click", indicate);
    document.addEventListener("keydown", pressKey);
    carousel.addEventListener("touchstart", swipeStart);
    carousel.addEventListener("touchend", swipeEnd);
  }

  function init() {
    initListeners();
    timerID = setInterval(nextSlide, interval);
  }
  init();
})(1500);
