'use strict'

class Cards {
  constructor(){
    this.cards = document.querySelectorAll('.card');
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.update = this.update.bind(this)
    this.target = null;
    this.startX = 0;
    this.screenX = 0;
    this.currentX = 0;
    this.draggingCard = false;

    this.addEventListeners();

    requestAnimationFrame(this.update);
  }

  addEventListeners() {
    document.addEventListener('touchstart', this.onStart);
    document.addEventListener('touchmove', this.onMove);
    document.addEventListener('touchend', this.onEnd);
  }

  onStart(evt) {

    if(evt.target.classList.contains('card')) return;

    this.target = evt.target;
    this.startX = evt.pageX || evt.touches[0].pageX;
    this.currentX = this.startX;

    this.draggingCard = true;
    this.target.style.willChange = 'transform'

    evt.preventDefault();

  }

  onMove(evt) {

    if(!this.target)
      return;

    this.currentX = evt.pageX || evt.touches[0].pageX;
  }

  onEnd(evt) {
    if(!this.target)
      return;

    this.draggingCard = false;

  }

  update(){

    requestAnimationFrame(this.update)
    if (!this.target)
      return;

    if (this.draggingCard){
      this.screenX = this.currentX - this.startX;
    }

    this.target.style.transform = `translateX(${screenX}px)`
  }
}

window.addEventListener('load', ()=> new Cards())
