noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup() {    
video = createCapture(VIDEO);
video.size(500,500);
video.position(300,130);
canvas = createCanvas(400, 400);
canvas.position(860,180);

poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses);
}

function modelLoaded() {

    console.log('PoseNet Is Initialized!');
    
}


function draw() {
    background('#FF0000');

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}

function gotPoses(results) {
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x - 250;
    noseY = results[0].pose.nose.y - 100;
    console.log("noseX = " + noseX + " noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
}



}