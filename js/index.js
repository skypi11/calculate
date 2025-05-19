const pad = document.querySelectorAll("button");
const screenShoot = document.querySelector("input");
let a = "";
let b = "";
let c = "";
let result = "";
function addition() {
  c = a + b;
  screenShoot.value = `${a}+${b}=${c}`;
}
for (const element of pad) {
  // console.log(element.textContent)
  element.addEventListener("click", () => {
    console.log(element);

    if (
      element.textContent.includes("+") ||
      element.textContent.includes("-") ||
      element.textContent.includes("/") ||
      element.textContent.includes("*")
    ) {
      // Récupérer la valeur déjà présente dans l'input et la stocker dans une variable
      a = Number(screenShoot.value);
      // Récupérer l'opérande et la stocker dans une variable

      b = element.textContent;
    }

    if (
      screenShoot.value.includes("C") ||
      screenShoot.value.includes("+") ||
      screenShoot.value.includes("-") ||
      screenShoot.value.includes("/") ||
      screenShoot.value.includes("*")
    ) {
      //screenShoot.value += element.textContent;
      screenShoot.value = "";
    }
    if (element.textContent.includes("=")) {
      c = Number(screenShoot.value);
      if (b === "+") {
        result = a + c;
        console.log(result);
        screenShoot.value = result;
        return;
      }
      if (b === "-") {
        result = a - c;
        screenShoot.value = result;
        return;
        console.log(result);
      }
      if (b === "*") {
        result = a * c;
        screenShoot.value = result;
        return;
        console.log(result);
      }
      if (b === "/") {
        result = a / c;
        screenShoot.value = result;
        return;
        console.log(result);
      }
    }
    // if (result !== NaN) {
    //     a = ''
    //     b = ''
    //     c = ''
    // }
    screenShoot.value += element.textContent;
    if (screenShoot.value.includes("C")) {
      screenShoot.value = "";
    }
  });
}
