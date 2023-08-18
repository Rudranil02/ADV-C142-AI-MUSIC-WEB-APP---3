function setup(){
    canvas = createCanvas(500,400);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotPoses);
}

function modelloaded(){
    console.log("Pose net is Initialize");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftwristX= results[0].pose.leftWrist.x;
        leftwristY= results[0].pose.leftWrist.y;
        console.log("Left Wrist X= "+leftwristX+ " Left Wrist Y= "+leftwristY);

        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("Right Wrist X = "+ rightWristX+ " Right Wrist Y= "+ rightWristY);
    
    }
}

function draw(){
    image(video, 0, 0, 500, 400);
}

song1= "";
song2="";
leftwristX=0;
leftwristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song1= loadSound("music2.mp3");
    song2= loadSound("music.mp3");
}