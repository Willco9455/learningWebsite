var face = {
    eyeColour:"green",
    age:23,height:'6ft 1',
    eyeAndAge: function(){
        return this.eyeColour + " " + this.age; 
    }
};

////slice and replaceing strings 
var str1 = "find the possition of the right word possition";
str1 = str1.replace(/possition/g,"possition replaced");
var str2 = "add this to end of string ";
var str3 = (str1.concat(" ",str2)).toUpperCase();
document.getElementById("paragraph").innerHTML=String(str3);
document.write("</br><div id='buttonWrapper'><p id='button'>this is the second button</p></div>")
