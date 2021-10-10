//Script.js

const sounds = ["applause", "boo", "victory", "gasp", "wrong", "tada"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    document.querySelector(`#${sound}`).play();
  });

  document.querySelector("#buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.querySelector(`#${sound}`);

    song.pause();
    song.currentTime = 0;
  });
}
