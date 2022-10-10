const socket = io("https://nyaara-app.herokuapp.com/");
socket.on("okay", () => {
  console.log("Connected to the server!");
});
