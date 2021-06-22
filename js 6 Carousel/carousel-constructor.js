class Carousel {
  constructor() {
    this.container = document.querySelector("#carousel");
    this.slides = this.container.querySelectorAll(".slide");
    this.pauseButton = this.container.querySelector("#pause-btn");
    this.prevButton = this.container.querySelector("#prev-btn");
    this.nextButton = this.container.querySelector("#next-btn");
    this.indicators = this.container.querySelectorAll(".indicator");
    this.indicatorsContainer = this.container.querySelector(
      "#indicators-container"
    );
    this.interval = 2000;
  }
  _initProps() {
    this.currentSlide = 0;
    this.slidesCount = this.slides.length;
    this.isPlaying = true;
    this.CODE_SPACE = "Space";
    this.CODE_LEFT_ARROW = "ArrowLeft";
    this.CODE_RIGHT_ARROW = "ArrowRight";
  }
  _initListeners() {
    this.pauseButton.addEventListener("click", () => this.pausePlay());
    this.prevButton.addEventListener("click", () => this.prev());
    this.nextButton.addEventListener("click", () => this.next());
    this.indicatorsContainer.addEventListener(
      "click",
      this._indicate.bind(this)
    );
    document.addEventListener("keydown", this.pressKey.bind(this));
  }
  _gotoSlide(n) {
    this.slides[this.currentSlide].classList.toggle("active");
    this.indicators[this.currentSlide].classList.toggle("active");
    this.currentSlide = (n + this.slidesCount) % this.slidesCount;
    this.slides[this.currentSlide].classList.toggle("active");
    this.indicators[this.currentSlide].classList.toggle("active");
  }
  _gotoNext() {
    this._gotoSlide(this.currentSlide + 1);
  }
  _gotoPrev() {
    this._gotoSlide(this.currentSlide - 1);
  }
  _pause() {
    if (this.isPlaying) {
      clearInterval(this.timerID);
      this.isPlaying = false;
      this.pauseButton.innerHTML = "Play";
    }
  }
  _play() {
    this.timerID = setInterval(() => this._gotoNext(), this.interval);
    this.isPlaying = true;
    this.pauseButton.innerHTML = "Pause";
  }
  _indicate(e) {
    const target = e.target;

    if (target && target.classList.contains("indicator")) {
      this._pause();
      this._gotoSlide(+target.dataset.slideTo);
    }
  }
  pressKey(e) {
    if (e.code === this.CODE_LEFT_ARROW) this.prev();
    if (e.code === this.CODE_RIGHT_ARROW) this.next();
    if (e.code === this.CODE_SPACE) this.pausePlay();
  }

  pausePlay() {
    if (this.isPlaying) this._pause();
    else this._play();
  }
  next() {
    this._pause();
    this._gotoNext();
  }
  prev() {
    this._pause();
    this._gotoPrev();
  }

  init() {
    this._initListeners();
    this._initProps();

    this.timerID = setInterval(() => this._gotoNext(), this.interval);
  }
}

Carousel.prototype = {};

// carouselconst carousel = new Carousel ();
// console.log(carousel)

// carousel.protoMethod()

// function SwipeCarousel() {
//     Carousel.apply(this.arguments)
// }
// SwipeCarousel.prototype = Object.create (Carousel.prototype)
// SwipeCarousel.prototype.constuctor = SwipeCarousel;

// this.container.addEventListener("touchstart", this._swipeStart.bind(this));
// this.container.addEventListener("touchend", this.swipeEnd.bind(this));

//  _swipeStart(e) {
//     this.swipeStartX = e.changedTouches[0].pageX;
//   },
//   swipeEnd(e) {
//     this.swipeEndX = e.changedTouches[0].pageX;
//     this.swipeStartX - this.swipeEndX > 100 && this.next();
//     this.swipeStartX - this.swipeEndX < -100 && this.prev();
//   },

// const carousel = new Carousel();

// console.log(carousel);
// carousel.protoMethod()
