var speechrecognition=window.webkitSpeechRecognition;
var recog=new speechrecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recog.start();
}

recog.onresult=function(e){
    console.log(e);
    var content=e.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    speak();
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
  });
  Webcam.attach( '#cam' );

function speak(){
    s=window.speechSynthesis;
    speakdata=document.getElementById("textbox").value;
    utter=new SpeechSynthesisUtterance(speakdata);
    s.speak(utter);
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
        '<img src="'+data_uri+'"/>';
      } );
}

