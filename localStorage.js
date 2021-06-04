
function setLocalValues(){
    alert("Hello! I am an alert box!!");
    localStorage.setItem('fistName', 'Jens');
    localStorage.setItem('lastName', 'Nickelsen');
    localStorage.setItem('age', '19');
    localStorage.setItem('email', 'jensnic@stud.ntnu.no');
    localStorage.setItem('address', 'Elvesvingen 2a');
    localStorage.setItem('city', 'Raufoss');

    var firstName = localStorage.getItem('fistName');
    var lastName = localStorage.getItem('lastName');
    var age = localStorage.getItem('age');
    var email = localStorage.getItem('email');
    var address = localStorage.getItem('address');
    var city = localStorage.getItem('city');

    document.getElementById("firstName").innerHTML = firstName;
    document.getElementById("lastName").innerHTML = lastName;
    document.getElementById("age").innerHTML = age;
    document.getElementById("email").innerHTML = email;
    document.getElementById("address").innerHTML = address;
    document.getElementById("city").innerHTML = city;
}



