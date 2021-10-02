function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(500, 450);
    canvas.position(500, 100);
    
    poseNet = ml5.poseNet(VIDEO, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    
    function modelLoaded(){
    console.log('posenet is initialized');
    }
    
    function draw() {
    background('#969A97');
    }
    
    function gotPoses(results) {
    if(results.length > 0)
    {
    console.log(results);
    }
    }
    
    
    
    
    
    
    