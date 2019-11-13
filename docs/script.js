function displayPortfolio() {
    $('.splashPage').on('click', '.displayPortfolio',
        function () {
            navWelcome();
        });
}

function navWelcome() {
    $('.splashContainer').fadeOut(function () {
        $('.splashPage').fadeIn().append(`<h1 class="welcome">Welcome</h1>`)
        showPortfolio();
    });
}


function showPortfolio() {
    $('.splashPage').delay(1000).fadeOut(function () {
        $('.pageContainer').fadeIn(function () {
            $('.splashPage').remove();
            showHome();
        })
    });
}

function expand() {
    $('.navMobile').on('click', '.navOpen',
        function () {
            showNav();
        });
}

function contract() {
    $('.navMobile').on('click', '.navClose',
        function () {
            hideNav();
        });
}

function showNav() {
    $('.navList').slideDown();
    $('.navOpen').attr('src', 'images/closeNav.png').attr('class', 'navClose');
}

function hideNav() {
    $('.navList').slideUp();
    $('.navClose').attr('src', 'images/openNav.png').attr('class', 'navOpen');
}

function showHome() {
    $('.displayBox').children().hide();
    $('.pageHome').fadeIn();
    window.scrollTo(0, 0);
    if ($(window).width() < 769) {
        hideNav();
    }
}

function showAbout() {
    $('.displayBox').children().hide();
    $('.pageAbout').fadeIn();
    window.scrollTo(0, 0);
    if ($(window).width() < 769) {
        hideNav();
    }
}

function showProjects() {
    $('.displayBox').children().hide();
    $('.pageProjects').fadeIn();
    window.scrollTo(0, 0);
    if ($(window).width() < 769) {
        hideNav();
    }
}

function navHome() {
    $('.navWrap').on('click', '.navHome',
        function () {
            showHome();
        })
}

function navAbout() {
    $('.navWrap').on('click', '.navAbout',
        function () {
            showAbout();
        })
}

function navProjects() {

    $('.navWrap').on('click', '.navProjects',
        function () {
            showProjects();
        })
}

function handlePortfolio() {
    displayPortfolio();
    expand();
    contract();
    navHome();
    navAbout();
    navProjects();
}

handlePortfolio();