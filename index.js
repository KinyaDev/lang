let servRoot = "https://nyaara-app.herokuapp.com";

let av = document.querySelector(".average");

setInterval(async () => {
  let r = await fetch(`${servRoot}/getNotes`);
  av.textContent = (await r.json()).note;
}, 3000);

let btnnote = document.querySelector(".sendnote");
btnnote.addEventListener("click", (ev) => {
  let inp = document.querySelector(".putnote");

  try {
    let n = parseInt(inp.value);
    if (n <= 20) {
      fetch(`${servRoot}/recommend/${localStorage.id}/${inp.value}`);
    } else {
      alert("Must be under 20");
    }
    inp.value = "";
  } catch {
    alert("Bad value");
  }
});
