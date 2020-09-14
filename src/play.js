const sounds = document.getElementsByClassName('sounds');

for (let i = 0, l = sounds.length; l > i; i++) {
  const file = sounds[i].getAttribute('data-file');
  const src = `./src/audio/${file}.mp3`;
  const audio = new Audio(src);

  sounds[i].addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
  });
}

const path = document.querySelectorAll('path');

for (let i = 0, l = path.length; l > i; i++) {
  const file = path[i].getAttribute('id');
  const src = `./src/audio/${file}.mp3`;
  const audio = new Audio(src);

  path[i].addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
  });
}
