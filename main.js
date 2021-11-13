function speaktakepic(){
    var synth = window.SpeechSynthesis;
    var data = "Take picture";
    var words = new SpeechSynthesisUtterance(data);
    synth.speak(words);
}
function speakidentifypic(){
    var synth = window.SpeechSynthesis;
    var data = "Identify person/animal";
    var words = new SpeechSynthesisUtterance(data);
    synth.speak(words);
}