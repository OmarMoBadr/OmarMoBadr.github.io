//Thanks to @AmrMoAdel for the suggestion


var hr = (new Date()).getHours();

if (hr > 6 && hr < 18){
    document.documentElement.style.setProperty("--first-color","#6c643c");
    document.body.style.setProperty("background-color","#3b403f");
    document.body.style.backgroundImage = "url('/assets/img/bg2.webp')";
    document.getElementsByClassName("landing_img")[0].src = "/assets/img/img2.webp";
}else{
    document.documentElement.style.setProperty("--first-color","#82B4C1");
    document.body.style.setProperty("background-color","black");
    document.body.style.backgroundImage = "url('/assets/img/bg.webp')";
    document.getElementsByClassName("landing_img")[0].src = "/assets/img/img.webp";
}