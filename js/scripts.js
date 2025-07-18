/*!
* Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
// Autoplay every 7 seconds
  setInterval(() => {
    const slides = document.querySelectorAll(".carousel__slide");
    const active = [...slides].findIndex(slide => slide === document.activeElement);
    const next = (active + 1) % slides.length;
    slides[next].focus();
  }, 7000);

  // Modal Popup logic
  function openModal(img) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
  }

  function closeModal() {
    document.getElementById("certModal").style.display = "none";
  }