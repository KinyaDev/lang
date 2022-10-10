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
