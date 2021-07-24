Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

var camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_img' src='" + data_uri + "'>";

    });
}
console.log("Ml5 version = " , ml5.version);

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/B6JPVSvwr/',modelLoaded);
 function modelLoaded(){
     console.log("Model Loaded.");
 }
  function check(){
     img = document.getElementById("captured_img");
     classifier.classify(img,gotResult);
 }

function gotResult(error,results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}