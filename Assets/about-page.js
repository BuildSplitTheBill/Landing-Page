class Carousel {
    constructor(carousel) {
       this.carousel = carousel;
       this.leftButton = document.querySelector('.left-button')
       this.rightButton = document.querySelector('.right-button')
       this.images = document.querySelectorAll('.carousel img')
       this.currentIndex = 0;
       this.currentImage = this.images[this.currentIndex];
       this.currentImage.style.display = 'block';
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
        this.images[this.currentIndex].style.display = 'block';
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
        this.images[this.currentIndex].style.display = 'block';
     }
}

let carousel = document.querySelectorAll('.carousel').forEach(carousel => new Carousel(carousel));

class TabLink {
    constructor(element) {
      // Assign this.element to the passed in DOM element
  
      this.element = element;
      // Get the custom data attribute on the Link
      
      //this.data = this.element.dataset.tab; // this is just a number
      this.data = this.element.dataset.tab;
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => this.select());
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link');
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));
  
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('tabs-link-selected');
      
      // Call the select method on the item associated with this link
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      // Assign this.element to the passed in element
      this.element = element;
    }
  
    select() {
      // Select all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll(".tabs-item");
  
      // Remove the class "tabs-item-selected" from each element
      //items.classList.remove("tabs-item-selected");
      items.forEach(item => item.classList.remove("tabs-item-selected"));
      // Add a class named "tabs-item-selected" to this element
      this.element.classList.add("tabs-item-selected");
    }
  }

  let links = document.querySelectorAll('.bio-item').forEach(tab => new TabLink(tab));