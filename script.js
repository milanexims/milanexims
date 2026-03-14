document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const options = card.querySelector(".options");
    options.style.display =
      options.style.display === "flex" ? "none" : "flex";
  });
});


 document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const type = params.get("type") || "national";

  const cards = document.querySelectorAll(".business-card");

  cards.forEach(card => {
    if (card.classList.contains(type)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });

});

function showPsychOptions() {
  document.getElementById("psychSubOptions").style.display = "flex";
}



