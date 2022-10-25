function select(){
    var CustomerID= document.getElementById("ID").value;
    console.log(CustomerID)
    if(CustomerID==""){
        return false;
    }
    var xhttp = new XMLHttpRequest();
    
    
    const Customer=`Customer=${CustomerID}`;


    xhttp.open("GET", "Select?" +Customer, true);
    xhttp.send();

    xhttp.addEventListener('load', function(){
        if (xhttp.status === 200 && xhttp.readyState === 4){
            var response = JSON.parse(xhttp.responseText)
            console.log("AJAX response : " + xhttp.responseText);
            for (var i=0;i<response.length;i++){
            document.getElementById("demo2").innerHTML = `Welcome ${response[i].Firstname} ${response[i].Lastname} ${response[i].Email} ${response[i].Password}`;
            }
        } else {
            console.error("Bad request");
        }   
})
}