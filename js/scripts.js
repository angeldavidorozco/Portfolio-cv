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


/*$(document).ready(function () {

    var token = 1;

    
    $('.project-gif').click(function (event) {
        if (token == 1) {

            event.stopPropagation(); // Prevent the click from propagating to the document

            $(this).addClass('project-gif-exp');
            $("#main").addClass("obscured");

            token = 0;
        }
    });

    $(document).click(function (event) {
        if (!$(event.target).closest('.project-gif-exp').length) {
            $('.project-gif').removeClass('project-gif-exp');
            $("#main").removeClass("obscured");

            token = 1;
        }
    });
});*/

$(document).ready(function () {
    // Add a click event handler to all project images
    var videoId = "";

    $('.project-gif').click(function (event) {
        
        if (videoId == "") {
            event.stopPropagation(); // Prevent the click from propagating to the document

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

