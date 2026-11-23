const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
} else {
    themeBtn.textContent = "🌙";
}

});

function openSubject(subject) {
alert("Welcome to " + subject + "! Learning materials will be added soon.");
}

const challenges = [
"Why does an object accelerate when a net force acts on it?",
"Why does increasing temperature often increase the rate of a chemical reaction?",
"Why does the square of a number always become non-negative?",
"How does the structure of a cell help it perform its functions?",
"Why can a small change in a mathematical model produce a large change in its prediction?"
];

function challenge() {
const randomIndex = Math.floor(Math.random() * challenges.length);
document.getElementById("challengeText").textContent =
challenges[randomIndex];
}
// ==============================
// LEARNING PROGRESS SYSTEM
// ==============================

let completedLessons = JSON.parse(
    localStorage.getItem("completedLessons") || "[]"
);

function saveProgress(subject) {
    if (!completedLessons.includes(subject)) {
        completedLessons.push(subject);
    }

    localStorage.setItem(
        "completedLessons",
        JSON.stringify(completedLessons)
    );

    updateProgress();
}

function updateProgress() {
    const totalSubjects = 4;

    document.getElementById("progressText").textContent =
        "Completed subjects: " + completedLessons.length +
        " / " + totalSubjects;

    const percentage =
        (completedLessons.length / totalSubjects) * 100;

    document.getElementById("progressFill").style.width =
        percentage + "%";
}

function resetProgress() {
    if (confirm("Are you sure you want to reset your progress?")) {
        completedLessons = [];

        localStorage.removeItem("completedLessons");

        updateProgress();
    }
}

// Update progress when the website loads
updateProgress();
