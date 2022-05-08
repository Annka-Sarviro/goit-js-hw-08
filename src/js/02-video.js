    import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    const localTime = localStorage.getItem("videoplayer-current-time");

    const onGetCurrentTime = function () {
        player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);            
    }).catch(function(error) {
        console.log(error)
    });
    }
      
    player.on('timeupdate', throttle(onGetCurrentTime), 1000);
    player.setCurrentTime(localTime);

