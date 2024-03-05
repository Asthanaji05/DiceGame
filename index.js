var random1=Math.floor(Math.random()*6)+1;

// Generate a random number between 1 and 6
var random1 = Math.floor(Math.random() * 6) + 1;

// Construct the filename using the random number
var randomimage = "dice" + random1 + ".png";

// Set the source attribute of the img element with class "img1" to the randomly selected image
document.querySelector(".img1").setAttribute("src", randomimage);


var random2=Math.floor(Math.random()*6)+1;

var randomimage2= "dice"+random2+".png";

var source2=randomimage2;

document.querySelector(".img2").setAttribute("src",source2);

if(random1>random2){
    document.querySelector("h1").innerHTML="Player1 Wins!!";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="Player2 Wins!!";
}
else{
    document.querySelector("h1").innerHTML="DRAW ;)";
}
