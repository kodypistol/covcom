let BCookies = document.getElementById("BCookies");
let togg2 = document.getElementById("togg2");
let MCookies = document.getElementById("MCookies");
BCookies.addEventListener("click", () => {
  if(getComputedStyle(MCookies).display != "none"){
    MCookies.style.display = "none";
  } else {
    MCookies.style.display = "block";
  }
})
