function showDiv() {
    document.getElementById('krant').style.display = "block";
    setTimeout(function () {
        $('#krant').fadeOut('fast');
    }, 2500);
    document.getElementById('titletext').style.display = "none";
    setTimeout(function () {
        $('#titletext').fadeOut('fast');
    }, 2500);
    document.getElementById('titletext2').style.display = "none";
    setTimeout(function () {
        $('#titletext2').fadeOut('fast');
    }, 2500);
    document.getElementById('bread').style.display = "none";
    setTimeout(function () {
        $('#bread').fadeOut('fast');
    }, 2500);
    document.getElementById('titletext3').style.display = "block";
}