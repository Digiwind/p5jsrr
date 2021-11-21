var video

function preload() {
    video = createVideo('rickrollvideo.mp4')
}

function setup () {
    createCanvas(windowWidth, windowHeight);
    video.size(windowWidth, windowHeight);
}

function draw () {
    background(0)
    video.play()
    video.volume(1);
    let img = video.get();
      image(img, 0, 0); 
} 
