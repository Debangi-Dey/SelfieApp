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
    if (content=="take my selfie"){
        speak();
    }
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
    //speakdata=document.getElementById("textbox").value;
    speakdata="taking your selfie in 3 seconds" 
    utter=new SpeechSynthesisUtterance(speakdata);
    s.speak(utter);
setTimeout(function(){
    take_snapshot();
    save();
},3000);
};

function take_snapshot(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
        '<img id="selfieimg" src="'+data_uri+'"/>';
      } );
}

function save(){
   link=document.getElementById("link");
   image=document.getElementById("selfieimg").src;
   link.href=image;
   link.click();
}