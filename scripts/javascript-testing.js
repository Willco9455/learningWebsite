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
var test1 = 0xF8;
document.write("</br><div id='buttonWrapper'><p id='button'>" + test1 +"</p></div>");

//array testing
var array1 = ["apple","orange","lemon"];
document.write(array1 + " ------>"); array1.splice(0,0,"hello","today","tomorow");
document.write(array1);var x  = 0
do{
    document.write(array1[x] + " then ");
    x += 1;
}while(x < ((array1.length) - 1));
array1.splice(0,3,"twelve");
document.write("</br><p>" + array1 + "</p>");
var array2 = ["one","two"];var array3 = ["three","four"];
array1 = array1.concat(array2[0],array3);
document.write("</br><p>" + array1 + "</p>");