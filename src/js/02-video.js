
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);


    const onPlay = function(data) {
       
        console.log(data.timeupdate)// data is an object containing properties specific to that event
    };
    
    player.on('play', onPlay);

    

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });