Webcam.set({
    width: 350,
height: 300,
image_format:"jpg",
jpg_quality: 90,
})
var camera= document.getElementById("camera")
Webcam.attach("#camera")
function takesnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='res' src='"+data_uri+"'>"
    })
}
console.log(ml5.version)
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/U-fRFfBMC/model.json",modelLoaded)
function modelLoaded(){
console.log("modelLoaded")
}
function identify(){
var img= document.getElementById("res")
classifier.classify(img,gotresult)
}
function gotresult(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results)
    document.getElementById("obgres").innerHTML=results[0].label
    document.getElementById("accu").innerHTML=results[0].confidence.toFixed(3)
}
}
