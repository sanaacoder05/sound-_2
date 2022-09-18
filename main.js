function b(){
    navigator.mediaDevices.getUserMedia({audio:true});
//This function should prompt the users to grant access to their connected microphones and cameras.
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DOGkzaJB9/model.json',modelLoaded);
//soundClassifier is a predefined function of ml5.js that is used to trigger the ml5.js sound classification function.
}

function modelReady(){
    classifier.classify(gotResults);
    //is a predefined function of ml5.js used to compare the captured audio with the model, and get the results.

}

function gotResults(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
    }
}
