var song

function preload() {
  song = loadSound('https://github.com/Digiwind/p5jsrr/blob/main/rickroll.mp3?raw=true')
}

function setup () {
    createCanvas(windowWidth, windowHeight);
}

function draw () {
    background(0)
    song.play()
} 
