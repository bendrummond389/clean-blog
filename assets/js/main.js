
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header-image-sm");

console.log(navbar.clientHeight)

window.onscroll = function (e) {

  if (this.scrollY > "66") {
    navbar.classList.add("is-fixed");
    if (this.oldScroll > this.scrollY) {
      navbar.classList.add("is-visible");
    }
    else {
      navbar.classList.remove("is-visible");
    }
    this.oldScroll = this.scrollY;
  }
  else {
    navbar.classList.remove("is-fixed");
    navbar.classList.remove("is-visible");
  }

}
