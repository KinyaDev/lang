let servRoot = "https://nyaara-app.herokuapp.com";

let av = document.querySelector(".average");
let btnnote = document.querySelector(".recommend");

setInterval(() => {
  fetch(`${servRoot}/recommend`, { method: "GET" })
    .then(async (r) => {
      av.textContent = (await r.json()).count;
    })
    .catch(console.error);

  fetch(`${servRoot}/recommend/${localStorage.id}`, {
    method: "GET",
  })
    .then(async (r1) => {
      if ((await r1.json()).have === true) {
        btnnote.value = "I don't recommend!";
      } else {
        btnnote.value = "I recommend!";
      }
    })
    .catch(console.error);
}, 5000);

btnnote.addEventListener("click", async (ev) => {
  try {
    if (btnnote.value === "I don't recommend!") {
      await fetch(`${servRoot}/recommend`, {
        method: "DELETE",
        body: { id: localStorage.id },
      });
    } else {
      await fetch(`${servRoot}/recommend`, {
        method: "POST",
        body: { id: localStorage.id },
      });
    }
  } catch (e) {
    console.error(e);
  }
});
