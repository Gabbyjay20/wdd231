const params = new URLSearchParams(window.location.search);

document.querySelector("#summary-firstName").textContent =
params.get("firstName") || "N/A";

document.querySelector("#summary-lastName").textContent =
params.get("lastName") || "N/A";

document.querySelector("#summary-email").textContent =
params.get("email") || "N/A";

document.querySelector("#summary-mobile").textContent =
params.get("mobile") || "N/A";

document.querySelector("#summary-businessName").textContent =
params.get("businessName") || "N/A";

document.querySelector("#summary-timestamp").textContent =
params.get("timestamp") || "N/A";

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
document.lastModified;
