let servRoot = "https://nyaara-app.herokuapp.com";

let av = document.querySelector(".average");
let btnnote = document.querySelector(".recommend");

setInterval(async () => {
  try {
    let r = await fetch(`${servRoot}/recommend/`, { method: "GET" });
    av.textContent = (await r.json()).count;

    let r1 = await fetch(`${servRoot}/recommend/${localStorage.id}`, {
      method: "GET",
    });
    if ((await r1.json()).have === true) {
      btnnote.value = "I don't recommend!";
    } else {
      btnnote.value = "I recommend!";
    }
  } catch (e) {
    console.error(e);
  }
}, 3000);

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
