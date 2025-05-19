const pad = document.querySelectorAll("button");
console.log(pad);
const screenShoot = document.querySelector("input");
const clear = document.querySelector("clear");
const a = 
const b = 
const c =
for (const element of pad) {
  // console.log(element.textContent)
  element.addEventListener("click", () => {
    console.log(element);
    screenShoot.value += element.textContent;
    if (screenShoot.value.includes("C")) {
      screenShoot.value = "";
    }
  });
}
