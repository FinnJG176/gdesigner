
var modals = document.querySelectorAll(".modal");
var btn = document.querySelectorAll("button.modal-button");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < btn.length; i ++) {
  console.log("i", i)
  btn[i].onclick = function(e) {
    e.preventDefault();
    modal=document.querySelector(e.target.getAttribute("href"))
    console.log("modal", modal)
    modal.style.display = "block";
  }
}
for (var i = 0; i < span.length; i ++) {
  span[i].onclick = function(e) {
      modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}