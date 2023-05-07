formsBtns = document.querySelectorAll('.option');


formsBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log(btn.id);
  })
});