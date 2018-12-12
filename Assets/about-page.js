class Carousel {
    constructor(carousel) {
       this.carousel = carousel;
       this.leftButton = document.querySelector('.left-button')
       this.rightButton = document.querySelector('.right-button')
       this.images = document.querySelectorAll('.carousel img')
       this.currentIndex = 0;
       this.currentImage = this.images[this.currentIndex];
       this.currentImage.style.display = 'block';
       //NEW STUFF
       this.bios = document.querySelectorAll('.bio-item');
       this.currentBio = this.bios[this.currentIndex];
       this.leftButton.addEventListener('click', () => this.previousImage());
       this.rightButton.addEventListener('click', () => this.nextImage());
    }
    previousImage() {
        const images = document.querySelectorAll('.carousel img');
        images.forEach(image => image.style.display = 'none');
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
            this.currentIndex = 4;
        }
        if (this.currentIndex > 4) {
            this.currentIndex = 0;
        }
        this.changeBio();
     }
     nextImage() {
        const images = document.querySelectorAll('.carousel img');
        images.forEach(image => image.style.display = 'none');
        this.currentIndex += 1;
        if (this.currentIndex < 0) {
            this.currentIndex = 4;
        }
        if (this.currentIndex > 4) {
            this.currentIndex = 0;
        }
        this.changeBio();
     }
     changeBio() {
        this.images[this.currentIndex].style.display = 'block';
        this.bios.forEach(bio => bio.classList.remove('bio-selected'));
        this.currentBio = this.bios[this.currentIndex]
        this.currentBio.classList.add('bio-selected');
     }
}

let carousel = document.querySelectorAll('.carousel').forEach(carousel => new Carousel(carousel));