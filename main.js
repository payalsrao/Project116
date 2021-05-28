
function preload() {
 
nosering = loadImage('https://i.postimg.cc/LsNyxsmL/nosering.jpg');
}


function draw() {
  
image(v, 0, 0, 500, 530);
image(nosering, noseX, noseY, 30, 30);

  
}

function setup() {
  
     
 canvas =  createCanvas(500, 530);
  canvas.center();

  
  v = createCapture(VIDEO);
  v.hide();
  posenet = ml5.poseNet(v, modelLoaded);
  posenet.on('pose', gotPoses);
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}


function modelLoaded(){
  console.log ("posenet model loaded!!!! ");
}


function take_snapshot() {
  save('LipstickFilterImage.png');
}
function selfie() {
  window.alert("SMILE PLEASE AND GET READY FOR THE CLOWN NOSE FILTER!!!!!!");
}