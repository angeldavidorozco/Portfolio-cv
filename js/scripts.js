/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible ////////////
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

window.addEventListener('load', function () {
    // Hide the loader container (black background)
    const loaderContainer = document.querySelector('.loader-container');
    setTimeout(function () {
        
        loaderContainer.style.opacity = '0';
    }, 2000);
    
    // Show the content with a slight delay (after the animation)
    setTimeout(function () {
        const content = document.querySelector('.content');
        content.style.opacity = '1';
        
    }, 3000); // Adjust the delay time (in milliseconds) as needed
    setTimeout(function () {

        loaderContainer.style.display = 'none';
    }, 5000);
});

$(document).ready(function () {
    // Add a click event handler to all project images
    var videoId = "";

    $('[data-video]').on('click', function () {
        
        if (videoId == "") {
            event.stopPropagation();

               // $(this).addClass('project-gif-exp');
            $("#main").addClass("obscured");

            // Get the data-video attribute value
            var Id = $(this).data("video");

            videoId = "#" + Id

            // Show the video with the corresponding ID
            $(videoId).addClass("project-gif-exp");
            $(videoId).removeClass("d-none");
            
            
        }

    });

    $(document).click(function (event) {
        if (!$(event.target).closest('.project-gif-exp').length) {
            $(videoId).addClass("d-none");
            $('.video').removeClass('project-gif-exp');
            $("#main").removeClass("obscured");

            videoId = "";
        }
    });
});

$(document).ready(function () {
    $('.carousel').carousel();
});


/////////////////////////////////////
//animation controls
////////////////////////////////////


// Get the .box element
const box = document.querySelector('.box');
const iconBox = document.querySelector('.icon-list');
const iconDiv = $('.icon-list');
const display = $(".box-image");
const toolBox = $(".tool");
const icons = $(".icon-item");


// Add an event listener for the animationend event on .box
box.addEventListener('animationend', () => {
    // Add your class to .open-box after the animation ends
    toolBox.addClass('d-none');
    display.removeClass('d-none');
});

iconBox.addEventListener('animationend', () => {
    // Add your class to .open-box after the animation ends
    
    icons.removeClass('d-none');
});







const animatedElement = document.querySelector('.animate-on-scroll');
const educationElement = document.querySelector('.educationSection');


function checkScroll() {
    
    const elementPosition = animatedElement.getBoundingClientRect();
    const elementPositionEducation = educationElement.getBoundingClientRect();

    // If the element is in the viewport
    if (elementPosition.top < window.innerHeight) {
        $(".skills-title").addClass('moveTitle');
        $(".box").addClass('moveBox');
        $(".icon-list").addClass('rotate');

        /*//you have to delete the classes of the other sections
        $(".education1").removeClass('moveDiv1');
        $(".education2").removeClass('moveDiv2');*/

    }
    else if (elementPositionEducation.top < window.innerHeight) {
        
        ///$(".education1").addClass('moveDiv1');
        //s$(".education2").addClass('moveDiv2');



        /*//you have to delete the classes of the other sections
        $(".skills-title").removeClass('moveTitle');
        $(".box").removeClass('moveBox');
        $(".icon-list").removeClass('rotate');
        toolBox.removeClass('d-none');
        display.addClass('d-none');
        icons.addClass('d-none');*/
    }
    else {


        //delete all animation classes
        $(".skills-title").removeClass('moveTitle');
        $(".box").removeClass('moveBox');
        $(".icon-list").removeClass('rotate');
        toolBox.removeClass('d-none');
        display.addClass('d-none');
        icons.addClass('d-none');


        
        $(".education1").removeClass('moveDiv1');
        $(".education2").removeClass('moveDiv2');
    }
}

// Attach a scroll event listener
window.addEventListener('scroll', checkScroll);

// Initial check in case the element is already in view when the page loads
checkScroll();