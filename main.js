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
        document.getElementById("result").innerHTML="<img src='"+data_uri+"'>"
    })
}
console.log(ml5.version)
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/U-fRFfBMC/model.json",modelLoaded)
function modelLoaded(){
console.log("modelLoaded")}
