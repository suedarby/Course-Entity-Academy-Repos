// create function
function idCard() {
    // declare variables needed
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    var fullName = firstName + " " + lastName;
    // user innerHTML to print user input on the id card
    document.getElementById("postFullName").innerHTML = fullName; //works
    document.getElementById("postAddress").innerHTML = "Address: " + address; //works
    // create an empty array
    var numberArray = [];
    // push elements into array
    numberArray.push(age, phoneNumber);
    // use for loop to go through array
    for (var i = 0; i < numberArray.length; i++) {
        // use if statements to check to a condition and perform a specific action based on the result aka true or false
        if (numberArray[i] < 100) {
            document.getElementById("postAge").innerHTML = "Age: " + age;
        } else if (numberArray[i] >= 100) {
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
        }
    }

}
