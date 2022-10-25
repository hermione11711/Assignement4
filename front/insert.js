function registere(){
    var entryfirstname = document.getElementById("firstname").value;
    var entryemail = document.getElementById("email").value;
    var entrypassword = document.getElementById("password").value;
    var entrylastname =document.getElementById("lastname").value;
    if (entryemail =="" || entryfirstname==""||entrypassword==""||entrylastname==""){
        return false;
    }

    console.log(entryfirstname)
    console.log(entrylastname)
    console.log(entrypassword)
    console.log(entryemail)
    

    
    
        var xhttp = new XMLHttpRequest();
    
    
        const firstname=`firstname=${entryfirstname}`;
        const lastname=`&lastname=${entrylastname}`;
        const email=`&email=${entryemail}`;
        const password=`&password=${entrypassword}`;
    
        xhttp.open("GET", "getInfo?" +firstname + lastname + email +
        password, true);
        xhttp.send();
        console.log("AJAX request sent :"+ email+ " " +password);

        xhttp.addEventListener('load', function(){
            if (xhttp.status === 200 && xhttp.readyState === 4){
                var response = xhttp.responseText
                console.log("AJAX response : " + xhttp.responseText);
                document.getElementById("demo").innerHTML = `${response}`;
                
            } else {
                console.error("Bad request");
            }   
    })
    
    
    
        
    
    }