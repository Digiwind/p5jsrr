var song

function preload() {
  song = loadSound('rickroll.mp3')
}

function setup () {
    createCanvas(windowWidth, windowHeight);
}

function draw () {
    background(0)
    song.play()
} 
