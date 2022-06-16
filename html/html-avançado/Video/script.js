console.log("Hello World!")
let video = document.getElementById("video1");

function  back() {
    video.currentTime -= 15;

}

function  decrease() {
    video.playbackRate -= 0.1;
}

function play() {
    video.play();
}

function  stop() {
    video.pause();
    video.currentTime = 0;
}

function increase() {
    video.playbackRate += 0.1;
}

function  foward() {
    video.currentTime += 15;
}