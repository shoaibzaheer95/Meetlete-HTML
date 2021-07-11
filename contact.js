const scriptURL =
  "https://script.google.com/macros/s/AKfycbwDDiumWL0Y6tPhsAQXzdDQ1QUE-FYCrlLUJjWOPV9Sg8pX0Icn/exec";
  

const fanForm = document.forms["fan-contact-form"];

if (fanForm) {
  fanForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(fanForm);
    formData.append("type", "fan");
    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => window.location.href = "fan-thanks.html")
      .catch((error) => console.error("Error!", error.message));
  });
}
const contestForm = document.forms["contest-contact-form"];

if (contestForm) {
  contestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contestForm);
    formData.append("type", "contest");
    fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => window.location.href = "contest-thanks.html")
      .catch((error) => console.error("Error!", error.message));
  });
}

const talentForm = document.forms["talent-contact-form"];

if (talentForm) {
  talentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(talentForm);
    formData.append("type", "talent");
    fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => window.location.href = "talent-thanks.html")
      .catch((error) => console.error("Error!", error.message));
  });
}
