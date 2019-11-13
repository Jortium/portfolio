function displayPortfolio(){
    $('.splashPage').on('click', '.displayPortfolio',
    function () {
        navWelcome();       
    });
}

function navWelcome(){
    $('.splashContainer').remove();
    $('.splashPage').fadeIn(1500).append(`<h1 class="welcome">Welcome</h1>`);
    showPortfolio();
 }


function showPortfolio() {
    $('.splashPage').delay(1000).fadeOut(1000);
    showPage();
    }

function showPage(){
    $('.pageContainer').delay(2000).fadeIn();
    $('.pageHome').delay(3000).slideDown(1000);
}

showHome();

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
    $('.navList').slideDown(800);
    $('.navOpen').attr('src', 'images/closeNav.png').attr('class', 'navClose');
}

function hideNav() {
    $('.navList').slideUp(800);
    $('.navClose').attr('src', 'images/openNav.png').attr('class', 'navOpen');
}

function showHome() {
    $('.displayBox').children().hide();
    $('.pageHome').fadeIn(1000);
    window.scrollTo(0, 0);
    if ($(window).width() < 769) {
        hideNav();
    }
}

function showAbout() {
    $('.displayBox').children().hide();
    $('.pageAbout').fadeIn(1000);
    window.scrollTo(0, 0);
    if ($(window).width() < 769) {
        hideNav();
    }
}

function showProjects() {
    $('.displayBox').children().hide();
    $('.pageProjects').fadeIn(1000);
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
