var random1=Math.floor(Math.random()*6)+1;

var randomimage= "dice"+random1+".png";

var source="./images/"+randomimage;

document.querySelector(".img1").setAttribute("src",source);


var random2=Math.floor(Math.random()*6)+1;

var randomimage2= "dice"+random2+".png";

var source2="./images/"+randomimage2;

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
