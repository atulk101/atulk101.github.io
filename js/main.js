var map;
let loc = { lat: 28.644, lng: 77.216721 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: loc,
    zoom: 8
  });
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.7;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});
// Smooth scrolling
$("#navbar a,.btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      1000
    );
  }
});
