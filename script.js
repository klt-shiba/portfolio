window.onload=function() {

    let navBar = document.getElementById("nav-header");
    let navBarLinks = navBar.getElementsByTagName('a');
    let modal = document.getElementById("my-modal");
    let modalButton = document.getElementById("modal-close-buttn");

    function showModal() {
        modal.classList.add("show-modal");
    }
    function hideModal() {
        modal.classList.remove("show-modal");
    }

    function addBlur() {    
        let sectionContainer = document.getElementsByTagName('section');
        for (i = 0; i < sectionContainer.length; i++) {
            sectionContainer[i].classList.add('bg-blur');
        }
        navBar.classList.add('bg-blur');
    }
    function removeBlur() {    
        let sectionContainer = document.getElementsByTagName('section');
        for (i = 0; i < sectionContainer.length; i++) {
            sectionContainer[i].classList.remove('bg-blur');
        }
        navBar.classList.remove('bg-blur');
    }
    function lockScroll() {
        let body = document.getElementById('klt-portfolio');
        body.classList.add('no-scroll');
    }
    function unlockScroll() {
        let body = document.getElementById('klt-portfolio');
        body.classList.remove('no-scroll');
    }
    function triggerModal() {
        showModal();
        lockScroll();
        addBlur()
    }

    function triggerModalOff() {
        unlockScroll();
        removeBlur();
        hideModal();
    }

    for (var i = 0 ; i < navBarLinks.length; i++) {
        navBarLinks[i].addEventListener('click', function (e) {
            triggerModal();
        });
    }


    modalButton.addEventListener('click', function(e) {
        triggerModalOff();
    })

     
}
