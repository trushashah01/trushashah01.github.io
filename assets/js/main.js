function toggleMore(id1, id2) {
  var x = document.getElementById(id1);
  var y = document.getElementById(id2)
  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerText = "Show less"
  } else {
    x.style.display = "none";
    y.innerText = "Show more"
  }
}
