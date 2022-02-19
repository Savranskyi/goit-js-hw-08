import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

const timeRestore = localStorage.getItem(CURRENT_TIME);

player.on(
    'timeupdate',
 throttle(data => {
        localStorage.setItem(CURRENT_TIME, Math.floor(data.seconds));
      }, 1000),
  );

if(timeRestore) {
    player.setCurrentTime(timeRestore);
};


