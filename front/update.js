function update(){

    var CustomerID= document.getElementById("ID").value;
    var entryfirstname = document.getElementById("firstname").value;
    var entryemail = document.getElementById("email").value;
    var entrypassword = document.getElementById("password").value;
    var entrylastname =document.getElementById("lastname").value;
    if(CustomerID==""){
        return false;
    }
    console.log(CustomerID)

    var xhttp = new XMLHttpRequest();
    
    
    const Customer=`Customer=${CustomerID}`;
    const firstname=`&firstname=${entryfirstname}`;
    const lastname=`&lastname=${entrylastname}`;
    const email=`&email=${entryemail}`;
    const password=`&password=${entrypassword}`;


    xhttp.open("GET", "Update?" +Customer+firstname+lastname+email+password,true);
    xhttp.send();

    xhttp.addEventListener('load', function(){
        if (xhttp.status === 200 && xhttp.readyState === 4){
            var response = xhttp.responseText
            console.log("AJAX response : " + xhttp.responseText);
            document.getElementById("demo3").innerHTML = `${response}`;
            
        } else {
            console.error("Bad request");
        }   
})
}