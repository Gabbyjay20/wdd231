document.querySelector("#timestamp").value =
new Date().toLocaleString();

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
document.lastModified;
