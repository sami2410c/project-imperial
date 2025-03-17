// Initialize Swiper
var swiper = new Swiper(".slid-container", {
    slidesPerView: 2,  // Show 2 cards per section on larger screens
    spaceBetween: 20,   // Space between cards
    slidesPerGroup: 2,  // Move 2 slides at a time
    loop: true,         // Infinite loop
    loopFillGroupWithBlank: true, // Fill with blank slides if needed
    pagination: {
        el: ".swiper-pagination",  // Pagination element
        clickable: true,            // Clickable pagination
    },
    navigation: {
        nextEl: ".swiper-button-next",  // Next button element
        prevEl: ".swiper-button-prev",  // Prev button element
    },
    breakpoints: {
        768: {
            slidesPerView: 1,  // Show 1 slide per section on mobile
            slidesPerGroup: 1,  // Move 1 slide at a time on mobile
        },
        1024: {
            slidesPerView: 2,  // Show 2 slides on tablets and larger devices
        }
    }
    

});



