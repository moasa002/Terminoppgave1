window.onscroll = function() {myFunction()};
scrollBtn = document.getElementById("scrollBtn");
function myFunction() {
  //Tar høyden av siden & scroll-lengden din og omgjør til prosent, som fyller opp en progress bar.
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  scrolled = scrolled / 100;
  console.log(scrolled);
  if(scrolled == 0) {
    scrollBtn.style.display = "none";
  } else {
    scrollBtn.style.display = "block";
  scrollBtn.style.opacity = scrolled;
}}


function scrollToTop() {
  //Scroller opp til toppen
  document.getElementById('snake').scrollIntoView({block: "end",behavior:"smooth"});
}

function scrollup() {
  //Setter scrolltop til 0 som gjør at du scroller opp
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}