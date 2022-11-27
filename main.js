function preload(){}
function setup(){
  canvas=createCanvas( 734,567);
  canvas.position(123,267);
  video=createCapture(VIDEO);
  video.hide();
tintcolor="";

}
function draw(){
image(video,0,0,734,567);
  tint(tintcolor);
}
function take_snapshot(){
  save("filterimage.png");
}


function filter_tint(){
tintcolor=document.getElementById("filter_color").value;
}