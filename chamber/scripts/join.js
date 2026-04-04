document.querySelector("#timestamp").value =
new Date().toLocaleString();

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
document.lastModified;

document.getElementById("npBtn")
.addEventListener("click", () => {
  document.getElementById("npModal")
  .showModal();
});

document.getElementById("bronzeBtn")
.addEventListener("click", () => {
  document.getElementById("bronzeModal")
  .showModal();
});

document.getElementById("silverBtn")
.addEventListener("click", () => {
  document.getElementById("silverModal")
  .showModal();
});

document.getElementById("goldBtn")
.addEventListener("click", () => {
  document.getElementById("goldModal")
  .showModal();
});

document.querySelectorAll('.close-modal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).close();
  });
});

document.getElementById("bronzeBtn")
.addEventListener("click", () => {
  document.getElementById("bronzeModal")
  .showModal();
});

document.getElementById("silverBtn")
.addEventListener("click", () => {
  document.getElementById("silverModal")
  .showModal();
});

document.getElementById("goldBtn")
.addEventListener("click", () => {
  document.getElementById("goldModal")
  .showModal();
});

document.querySelectorAll('.close-modal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).close();
  });
});
