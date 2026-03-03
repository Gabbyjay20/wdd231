const courses = [
    { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "WDD231", name: "Frontend Dev I", credits: 3, completed: false },
    { code: "CSE110", name: "Programming Blocks", credits: 2, completed: true },
    { code: "CSE111", name: "Prog With Functions", credits: 2, completed: false }
];

const coursesEl = document.getElementById("courses");
const totalEl = document.getElementById("totalCredits");

function displayCourses(list) {
    coursesEl.innerHTML = "";

    list.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");
        if (course.completed) card.classList.add("completed");

        card.innerHTML = `
            <p>${course.code} - ${course.name} (${course.credits} credits)</p>
        `;

        coursesEl.appendChild(card);
    });

    const sum = list.reduce((acc, c) => acc + c.credits, 0);
    totalEl.textContent = `Total credits: ${sum}`;
}

displayCourses(courses);

document.getElementById("allBtn").addEventListener("click", () => displayCourses(courses));
document.getElementById("cseBtn").addEventListener("click", () => displayCourses(courses.filter(c => c.code.startsWith("CSE"))));
document.getElementById("wddBtn").addEventListener("click", () => displayCourses(courses.filter(c => c.code.startsWith("WDD"))));