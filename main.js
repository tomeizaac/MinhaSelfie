let SpeechRecognition = window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = " ";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    let speech = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = speech;
    if (speech == "tire minha selfie") {
        speak();
    }

}

function speak() {
    let synth = window.speechSynthesis;
    text = "tirando sua selfie em cinco sengundos"
    let utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
    setTimeout(function () {
        takeselfie()
        save();
    }, 7000)

}

Webcam.set({
    width: 430,
    height: 240,
    image_format: 'png',
    png_quality: 90
});
let path = document.getElementById("camera");
Webcam.attach(path);

function takeselfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="foto" src="' + data_uri + '">'
    })
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("foto").src;
    link.href = image;
    link.click();
}