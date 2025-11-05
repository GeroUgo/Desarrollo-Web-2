// Menú responsive
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
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
