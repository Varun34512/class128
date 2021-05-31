pan_song="" ;
harry_song="";
leftWristX = 0 ;
leftWristY = 0 ;
rightWristX = 0 ;
rightWristY = 0 ;

function preload() {
    pan_song=loadSound("music.mp3") ;
    harry_song=loadSound("music2.mp3")
}

function setup() {
    canvas= createCanvas(600,500) ;
    canvas.center() ;
    video= createCapture(VIDEO) ;
    video.hide() ;
    posenet= ml5.poseNet(video,modelLoaded) ;
    posenet.on('pose',gotPoses) ;
}

function draw() {
    image(video, 0,0,600,500) ;
}

function modelLoaded(){
    console.log("poseNet model is initialized") ;
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results) ;
        leftWristX= results[0].pose.leftWrist.x ;
        leftWristY= results[0].pose.leftWrist.y ;
        rightWristX= results[0].pose.rightWrist.x ;
        rightWristY= results[0].pose.rightWrist.y ;
        console.log("leftWristX = "+ leftWristX) ;
        console.log("leftWristY = "+ leftWristY) ;
        console.log("rightWristX = "+ rightWristX) ;
        console.log("rightWristY = "+ rightWristY) ;
     }
}

