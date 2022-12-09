let mode = localStorage.getItem('mode');
let menuOpen = false;

const loadAssets = function(){
    $('#header').load('/assets/header.html');
    $('#footer').load('/assets/footer.html');
}

const openMenu = function(){
    if (menuOpen){
        menuOpen = false;
        $('header nav').hide();
        $('header .banner').css('background-color','rgba(var(--background-rgb), 0.8)')
    } else{
        menuOpen = true;
        $('header nav').show();
        $('header .banner').css('background-color','var(--background)')
    }
}

const setMode = function(){
    if (mode == "light"){
        console.log('lightooo');
        $('html').attr('theme','light')
        $('.mode').html('<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" height="25px"><rect fill="none" height="24" width="24"/><path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" fill="#222222"/></svg>');
        $('#top').css('background-image','url(img/top2.jpg)');
    } else {
        console.log('darkkk');
        $('html').attr('theme','dark')
        $('.mode').html('<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/></svg>')
        $('#top').css('background-image','url(img/top1.jpg)');
    }
}

const changeMode = function(){

    $('.bg').css('transition', '0.25s')

    if (mode == "light"){

        mode = "dark"
        localStorage.setItem('mode', 'dark');
        setMode();
        console.log("dark");

    } else{
        
        mode = "light"
        localStorage.setItem('mode', 'light');
        setMode();
        console.log("light");

    }
    
}

const logoAnimation = function(){
    
    $('#top .logo svg').height("200px")
    $("#top .logo svg").animate({
        "width": "100px",
        "height": "100px"
    },1000,"easeInOutQuad");

    $("#top .logo svg .rect1").attr({width: '0'})
    $("#top .logo svg .rect1").animate({
        "width": "1000"
    },250,"linear");

    $("#top .logo svg .rect2").attr({height: '0'})
    $("#top .logo svg .rect2").delay(250).animate({
        "height": "1000"
    },250,"linear");

    $("#top .logo svg .rect3").attr({width: '0', x:'1000'})
    $("#top .logo svg .rect3").delay(500).animate({
        "width": "1000",
        "x": "0"
    },250,"linear");

    $("#top .logo svg .rect4").attr({height: '0', y:'1000'})
    $("#top .logo svg .rect4").delay(750).animate({
        "height": "1000",
        "y": "0"
    },250,"linear");

    $("#top .logo svg .rect5").attr({height: '0'})
    $("#top .logo svg .rect5").delay(750).animate({
        "height": "400"
    },125,"linear");

    $("#top .logo svg .rect6").attr({width: '0'})
    $("#top .logo svg .rect6").delay(875).animate({
        "width": "250"
    },125,"linear");

}

const headerAnimation = function(){
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > $(window).height()) {
            $(".animation header").css('top', '0');
        } else {
            $(".animation header").css('top', '-62.5px');
        }
    });
}

const time = function(){
        const today = new Date();
        month = today.getMonth() + 1;
        $('#time').html(today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2));
        $('#date').html(today.getMonth() + 1 + "/" + ('0' + today.getDate()).slice(-2));
}

$(function(){
    loadAssets();
    headerAnimation();
    logoAnimation();
    time();
    setMode();

});

window.onload = function() {
    setMode();
}

setInterval(time , 1000);
