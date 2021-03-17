window.onload=function() {

    let navBar = document.getElementById("nav-header");
    let navBarLinks = navBar.getElementsByTagName('a');

    let modal = document.getElementById("my-modal");

      function showModal() {
        modal.classList.add("show-modal")
      }
      function addBlur() {
        let sectionContainer = document.getElementsByTagName('section');
        for (i = 0; i < sectionContainer.length; i++) {
            sectionContainer[i].classList.add('bg-blur');
        }
      }
      navBarLinks.addEventListener('click', showModal(), addBlur())
     
      
}