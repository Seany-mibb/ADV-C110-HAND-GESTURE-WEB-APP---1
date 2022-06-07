prediction1= '';
prediction2 = '';

Webcam.set({
    width:280,
    height:280,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera1");

Webcam.attach('#camera1')

function take_snapshot1()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    })
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/C7P3tlXLc/model.json',modelLoaded)

function modelLoaded()
{
    console.log('Model is Loaded')
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction1;
    speak_data_2 = " And The second prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis)
}