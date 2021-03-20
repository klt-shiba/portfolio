window.onload=function() {

    let navBar = document.getElementById("nav-header");
    let navBarLinks = navBar.getElementsByTagName('a');
    let modal = document.getElementById("my-modal");
    let modalButton = document.getElementById("modal-close-buttn");

    function toggleModal() {
       ((modal.classList.contains("show-modal")) ? 
       (modal.classList.remove("show-modal")) : 
       (modal.classList.add("show-modal")));
    }

    function toggleblur() {
        let sectionContainer = document.getElementsByTagName('section'); 
        for (i = 0; i < sectionContainer.length; i++) { 

            ((sectionContainer[i].classList.contains("bg-blur")) ? 
            (sectionContainer[i].classList.remove('bg-blur'), navBar.classList.remove('bg-blur')) : 
            (sectionContainer[i].classList.add('bg-blur'), navBar.classList.add('bg-blur')));
            
        }
    }
    function toggleScroll() {
        let body = document.getElementById('klt-portfolio'); 

        ((body.classList.contains("no-scroll")) ? 
        (body.classList.remove("no-scroll")) : 
        (body.classList.add("no-scroll")));
    }
    function toggleModalExperience() {
        toggleModal()
        toggleScroll()
        toggleblur();
    }

    for (var i = 0 ; i < navBarLinks.length; i++) {
        navBarLinks[i].addEventListener('click', function (e) {
            toggleModalExperience()
        });
    }

    modalButton.addEventListener('click', function(e) {
        toggleModalExperience()
    })
     
}
