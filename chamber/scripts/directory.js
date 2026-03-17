const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

getMembers();

function displayMembers(members) {
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");

  document.querySelectorAll(".card img").forEach(img => {
    img.style.display = "block";
  });
});

listBtn.addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");

  document.querySelectorAll(".card img").forEach(img => {
    img.style.display = "none";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;