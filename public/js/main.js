$(document).ready(function () {
  $(".iframe-popup").magnificPopup({
    type: "iframe",
    closeOnContentClick: false,
    midClick: true,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
    zoom: {
      enabled: true,
      duration: 500, // don't foget to change the duration also in CSS
    },
    mainClass: "mfp-fade",
  });

  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-fade", // class to remove default margin from left and right side
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });
});

function showHotspots() {
  var s = document.getElementById("sikuen").clientWidth;
  document.getElementById("hotspots").style.width = s + "px";
  document.getElementById("sikuen").classList.add("hide");
  document.getElementById("sikuen2").classList.remove("hide");
  document.getElementById("sikuen2").classList.add("show");
  
}
