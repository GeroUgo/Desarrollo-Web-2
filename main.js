// Menú responsive
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const comprarButtons = document.querySelectorAll(".comprar");
toggle.addEventListener("click", () => nav.classList.toggle("active"));

// Simulación envío de formulario
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias por contactarte con EnerGym 💪");
    form.reset();
  });
}

comprarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Comprado ✅";
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.disabled = true;
    alert("¡Gracias por tu compra! 🎉");
  });
});
