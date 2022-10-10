let servRoot = "https://nyaara-app.herokuapp.com";

function getNote() {
  return new Promise(async (resolve, reject) => {
    let m = await fetch(`${servRoot}/getNotes`);
    resolve(await m.json());
  });
}

function addNote(note, id) {
  return new Promise(async (resolve, reject) => {
    await fetch(`${servRoot}/recommend/${id}/${note}`);
    resolve();
  });
}

let av = document.querySelector(".average");

setInterval(() => {
  av.textContent = getNote();
}, 3000);

let btnnote = document.querySelector(".sendnote");
btnnote.addEventListener("click", (ev) => {
  let inp = document.querySelector(".putnote");

  try {
    let n = parseInt(inp.value);
    if (n <= 20) {
      addNote(inp.value, localStorage.id);
    } else {
      alert("Must be under 20");
    }
    inp.value = "";
  } catch {
    alert("Bad value");
  }
});
