
var nav = document.querySelector('nav');
window.addEventListener('scroll', function (){
    if (this.window.pageYOffset> 100){
        nav.classList.add('bg-dark','shadow','min-height','100vh');
    } else{
        nav.classList.remove('bg-dark','shadow');
    }
});
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}
