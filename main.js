// shuffle button
const shuffle = document.querySelector('#shuffle');
const shuffleCheckbox = document.querySelector('.shuffle input');

shuffleCheckbox.addEventListener('change', () => {
  if (shuffleCheckbox.checked === true) {
    shuffle.style.color = 'green';
  } else {
    shuffle.style.color = '#eee';
  }
});

// play button 
const play = document.querySelector('#play');
const playCheckbox = document.querySelector('.play input');

playCheckbox.addEventListener('change', () => {
  if (playCheckbox.checked === true) {
    if (play.classList.contains('bi-play-circle-fill')) {
      play.classList.remove('bi-play-circle-fill');
      play.classList.add('bi-pause-circle-fill');
    }
  } else {
    play.classList.remove('bi-pause-circel-fill');
    play.classList.add('bi-play-circle-fill');
  }
});

// repeat button
const repeat = document.querySelector('#repeat');
const repeatCheckbox = document.querySelector('.repeat input');

let counter = 0;
repeat.addEventListener('click', () => {
  counter++;
  
  if (counter === 1) {
    repeat.style.color = 'green';
  } else if(counter === 2) {
    if (repeat.classList.contains('bi-repeat')) {
      repeat.classList.remove('bi-repeat');
      repeat.classList.add('bi-repeat-1');
    }
  } else if(counter === 3) {
    counter = 0;
    repeat.classList.remove('bi_repeat-1');
    repeat.classList.add('bi-repeat');
    repeat.style.color = '#eee';
  }
});