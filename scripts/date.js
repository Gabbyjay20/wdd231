const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;