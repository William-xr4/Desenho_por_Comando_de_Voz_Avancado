var x = 0;
var y = 0;
var drawApple = "";
var drawRect = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function preload() {
    maca = loadImage("maca.png");
}
function start() {
    document.getElementById("status").innerHTML = "O sistema esta ouvindo, pode falar.";
    recognition.start()
}
recognition.onresult = function (event) {
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content;
    numberV = Number(content)
    if (Number.isInteger(numberV)) {
        drawApple = "set"
    }
}
function setup() {
    canvas = createCanvas(1600, 650);
}
function draw() {
    if (drawApple == "set"){
        console.log("Aqui!")
        for (var i = 1; i <= numberV; i++) {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(maca, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = "Maçã(s) desenhada(s)";
        speakData = numberV + "Maçã(s) desenhada(s)";
        speak();
        drawApple = "";
    }
}
function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis); speakData = "";
}