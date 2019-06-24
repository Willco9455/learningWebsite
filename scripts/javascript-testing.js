var test = "ello"; console.log(String(test) + ' is a ' + typeof(test));

function changeToRed (idToChange){
    document.getElementById(idToChange).style.color="red";
    document.getElementById("button1").style.display="none";
    document.getElementById("button2").style.display="inline-block";
}
function changeToPink (idToChange){
    document.getElementById(idToChange).style.color="pink";
    document.getElementById("button1").style.display="inline-block";
    document.getElementById("button2").style.display="none";
}
