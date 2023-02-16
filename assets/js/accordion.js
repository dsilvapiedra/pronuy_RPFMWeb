var acc = document.getElementsByClassName("accordion");
var i;
/*
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });}
*/
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


function toggleConfTab(order) {
  var conftab = document.getElementById("confdrop");
  if (order) {
    conftab.style.display = order;
  }
  else {
    conftab.style.display = (conftab.style.display == "block") ? "none" : "block";
  }
}

function togglePrensaTab() {
  var prensatab = document.getElementById("prensadrop");
  if (order) {
    prensatab.style.display = order;
  }
  else {
    prensatab.style.display = (prensatab.style.display == "block") ? "none" : "block";
  }
}