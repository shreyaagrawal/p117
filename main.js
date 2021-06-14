function preload() {
    
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video =createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,300,300);
    classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/S6qTe6lQd/model.json',modelLoaded);
    classifier.classify(video,gotResult);
}

function modelLoaded() {
    console.log("loaded")
}

function gotResult() {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("object_name").innerHTML= index[0].label;
        document.getElementById("object_accuracy").innerHTML= index[0].confidence.toFixed(3);
    }
}