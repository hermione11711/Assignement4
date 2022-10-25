function delet(){
    var CustomerID= document.getElementById("ID").value;
    console.log(CustomerID)
    if(CustomerID==""){
        return false;
    }

    var xhttp = new XMLHttpRequest();
    
    
    const Customer=`Customer=${CustomerID}`;


    xhttp.open("GET", "Delete?" +Customer, true);
    xhttp.send();

    xhttp.addEventListener('load', function(){
        if (xhttp.status === 200 && xhttp.readyState === 4){
            var response = xhttp.responseText
            console.log("AJAX response : " + xhttp.responseText);
            document.getElementById("demo4").innerHTML = `${response}`;
            
        } else {
            console.error("Bad request");
        }   
})




}