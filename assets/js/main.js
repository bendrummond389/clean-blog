
const navbar = document.getElementById('navbarTop');

console.log(navbar.clientHeight);
let previousPosition = 0;

window.onscroll = function (e) {

  if (this.scrollY < previousPosition)
  {
    //scroll up
    navbar.classList.add("show")
    if(this.scrollY == 0)
    {
      navbar.classList.remove("fixed","show")
    }


  }

  else{
    navbar.classList.remove("show")
    if(this.scrollY > navbar.clientHeight)
    navbar.classList.add("fixed")
  }
  previousPosition = this.scrollY;

}