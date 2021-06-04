
fetch('lists.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    
    for(i in data){
        var table = document.getElementById("jsonTable");
        var row = table.insertRow(0);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);

        cell0.innerHTML = data[i]["name"];
        cell1.innerHTML = data[i]["age"];
        cell2.innerHTML = data[i]["relation"];

        
    }
    
})
