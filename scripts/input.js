const input = document.getElementById("input");
const placeholder = document.getElementById("placeholder");

input.addEventListener("input", (e) => {
  const Length = e.target.value.length;
  if (Length !== 0) {
    placeholder.classList.add("active");
  } else if (Length === 0) {
    placeholder.classList.remove("active");
  }
});
