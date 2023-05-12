function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1r6FAc503/model.json", modelready);
}

function modelready(){
    classifier.classify(gotresults);
}

var dog=0;
var cat=0;
var cow=0;

function gotresults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        randomnumberr = Math.floor(Math.random()*255)+1;
        randomnumberg = Math.floor(Math.random()*255)+1;
        randomnumberb = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="Detected voice of - "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Dectected - dog"+dog+"Detected - cat"+cat+"Detected - cow"+cow;
        document.getElementById("result_label").style.color="rgb("+randomnumberr+","+randomnumberg+", "+randomnumberb+")";
        document.getElementById("result_confidence").style.color="rgb("+randomnumberr+","+randomnumberg+", "+randomnumberb+")";
        img=document.getElementById("animalimg");
        if(results[0].label=="barking"){
            img.src="barking.gif";
            dog = dog+1;
        }
        else if(results[0].label=="meowing"){
            img.src="meowing.gif";
            cat = cat+1
        }
        else{
            img.src="mooing.gif";
            cow = cow+1
        }
    }
}