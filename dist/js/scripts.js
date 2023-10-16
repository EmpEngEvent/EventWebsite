/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

// Scrolling back to top
$(document).ready(function(){
    $('html, body').animate({scrollTop: 0}, 'slow');
  });
  

//Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    //console.log($videoSrc);

    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })
});

//Modal Video
$(document).ready(function () {
    var $videoSrc;
    $('.btn-play1').click(function () {
        $videoSrc = $(this).data("src");
    });
    //console.log($videoSrc);

    $('#videoModal1').on('shown.bs.modal', function (e) {
        $("#video1").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    $('#videoModal1').on('hide.bs.modal', function (e) {
        $("#video1").attr('src', $videoSrc);
    })
});



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

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


// Define the URL of the API you want to send a POST request to
const apiUrl = "https://hooks.zapier.com/hooks/catch/16779858/3slkpml/";

// Create a data object with the data you want to send

function saveSpotDetails() {
    const postData = {
      FirstName: document.getElementById("fname").value,
      LastName: document.getElementById("lname").value,
      Email: document.getElementById("email").value,
      Company:document.getElementById("company").value,
      Parking:document.getElementsByName("parking").value
    };
  
    console.log('before fetch: ', postData);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
      mode: "no-cors"
    };
    fetch(apiUrl, requestOptions)
      .then((response) => {
          var successAlert = document.getElementById("successAlert");
          successAlert.innerHTML ="Your spot reserved successfully!!"
          document.getElementById("sponsorModal").reset();
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }