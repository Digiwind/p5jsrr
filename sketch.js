var video

function preload() {
  video = createVideo('rickrollvideo.mp4')
}

function setup () {
    createCanvas(windowWidth, windowHeight);
    video.play()
    video.size(windowWidth, windowHeight);
    video.volume(1);
}

function draw () {
    background(0)
    let img = video.get();
        image(img, 0, 0); 
} 
