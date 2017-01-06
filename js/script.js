var amountScrolled = 300;
var navScrolled = 100;
var mobStat = detectMob();

$(document).ready(function(){
    $(window).resize();
    addMobFeatures();
});

$(window).resize(function() {
    $(window).scroll();
});

$(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
        $('.w3-btn-floating-large').fadeIn('slow');
    } else {
        $('.w3-btn-floating-large').fadeOut('slow');
    }
});

// handle links with @href started with '#' only
function easeScroll(hlink) {
    // target element id
    var id = hlink;

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    //e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: $(id).offset().top}, 500);

    //$('body, html').animate({scrollTop: pos});
}

function detectMob() { 
    if(navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)){
        return true;
    }
    else {
        return false;
    }
}

function addMobFeatures() {
    if (mobStat == true) {
        $("#mobNo").html('<a href="tel:+918884844245">+91 88848 44245</a>');
        $("#mobNos").html('<a href="tel:+918884844245">+91 88848 44245</a><br/><a href="tel:+919534132601">+91 95341 32601</a>');
    }
    else {
        $("#mobNo").html('+91 88848 44245');
        $("#mobNos").html('+91 88848 44245<br/>+91 95341 32601');
    }
}

var smsBody = "";
var smsName = "";
var smsMail = "";
var smsText = "";

function msgText () {
    smsName = $("#name").val();
    smsMail = $("#email").val();
    smsText = $("#message").val();
    smsBody = smsName + " (" + smsMail + "):\n" + smsText;
    sendMsg();
}

function sendMsg() {
    if (mobStat == true) {
        $("#askProject").attr("href", "sms:+918884844245?body=Hi, I would like to know more about your projects.");
        $("#submit").attr("href", "sms:+918884844245?body="+smsBody);
    }
    else {
        $("#askProject").attr("href", "");
        $("#submit").attr("href", "");
    }
}