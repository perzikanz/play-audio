const path = document.querySelectorAll('path');

for (let i = 0, l = path.length; l > i; i++) {
  const file = path[i].getAttribute('id');
  const src = `./src/audio/${file}.mp3`;
  const audio = new Audio(src);

  path[i].addEventListener('mousedown', () => {
    audio.currentTime = 0;
    audio.play();
  });
}
