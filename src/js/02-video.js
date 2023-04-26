import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timeThrottled = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}, 1000); 

const time = player.on('timeupdate', timeThrottled);

currentTimeFn();

 function currentTimeFn()  {
  const array = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  if (array) {
    const currentTime = array.seconds;
    player.setCurrentTime(currentTime);
  }
  
}
