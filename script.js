window.addEventListener("click", (event) => {
  if (event.target.nodeName === "A") {
    event.preventDefault();
    window.location.href += "about";
  }
});
