function conditonalAndLoops(){
    var x = 100;
    var x = (100<101)? "<h1>True</h1>":"fasle";
    document.write(x);
    if(101 === x ){
        document.write("100 is equal to 100");
    }
    else if(102 == x){
        document.write("hello")
    }
    else{
        alert("this page does not work peroperly");
    }
    switch("josh"){
    case(1):
    document.write("case 1");
    case(101):
    document.write("case 2");
    case(2):
    document.write("<h1>WORKED</h1>");
    break;
    case("josh"):
    document.write("case was josh");
    break;
    default:
    document.write("case 20");
    }
    for(i=1;i<=10;i++){
        document.write(i + "</br>");
    }var x = 0;
    document.write("</br>")

    while(x<=200){
        document.write(x + "</br>");
        x += 20;
    }

    do{
        document.write("</br>executed once");
    }
    while(100<90);
    break;
}

function Functions(){


    var conf = confirm("do you want the page to load or not");
    if(conf == true){
        document.write("<br>continued");
    }
    else{
        document.write("<br><br>discontinued");
    }
}

function objects(){

    var objects = {
        forename:"will",
        surname:"moran"
    };    
    document.write("<br>" + 
    objects.forename + 
    objects.surname)
    
    document.write("<br>" +
    objects.forename.length)

    

}

objects()