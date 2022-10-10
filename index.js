let servRoot = "https://nyaara-app.herokuapp.com/";

function getNote() {
  return new Promise(async (resolve, reject) => {
    let m = await fetch(`${servRoot}/getNotes`);
    resolve(await m.json());
  });
}

function addNote(note) {
  return new Promise(async (resolve, reject) => {
    await fetch(`${servRoot}/recommend/${note}`);
    resolve();
  });
}
