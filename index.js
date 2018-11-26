function ValidateForm(){
 var validUsername = false;
 var validUserPassword = false;
 var validFirstName = false; 
 var letters = /^[A-Za-z]+$/;
 var validPhone = false;
 var numbers = /^[0-9]+$/;
 var validLastName = false; 
 var userEmail = document.getElementById("email").value;
 var atpos = userEmail.indexOf("@");
 var dotpos = userEmail.lastIndexOf(".");
 var validAddress = false;
 var validCity = false;
 var validCountries = false;
 var validZipcode = false;

 
  
  
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

/*********** VALIDATES USERNAME ******** */
  //Required.  Maximum 12 characters.
 if (myContact.username.value.length > 12 || myContact.username.value===null || myContact.username.value==="") 
   errorMessages += "<p>The username must be less than 12 characters and is required</p>";
 else 
    validUsername =true;
  
 //console.log(validUsername);  
  
  
  
 /*********** VALIDATES PASSWORD ******** */
 if (myContact.password.value==null ||
 myContact.password.value=== "" ||
 myContact.password.value.length >7)
 errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
 else
 validUserPassword = true;
  
 
  /*********** VALIDATES FIRSTNAME ******** */
 if (myContact.firstname.value==null ||
 myContact.firstname.value=== "" ||
 myContact.firstname.value.length >20 || !myContact.firstname.value.match(letters))
 errorMessages += "<p>The firstname must be less than 20 characters and it is required. Only letters and numbers are required</p>";
 else
 validFirstName = true;
  
    /*********** VALIDATES PHONENUMBER ******** */
 if (myContact.phone.value==null ||
 myContact.phone.value=== "" ||
 myContact.phone.value.length >15 || !myContact.firstname.value.match(numbers))
 errorMessages += "<p>The phone number must be less than 15 characters and it is required. Only numbers are accepted</p>";
 else
 validPhone = true;
  
  /*********** VALIDATES LASTNAME ******** */
 if (myContact.lastname.value==null ||
 myContact.lastname.value=== "" ||
 myContact.lastname.value.length >50 || !myContact.firstname.value.match(letters))
 errorMessages += "<p>The lastname must be less than 50 characters and it is required </p>";
 else
 validFirstName = true;
  
  /*********** VALIDATES EMAIL ******** */
 if (myContact.email.value==null ||
 myContact.email.value=== "" ||
 myContact.email.value.length >required || !myContact.firstname.value.match(letters))
 errorMessages += "<p>The email is required</p>";
 else
 validPhone = true;
  
  /*********** VALIDATES ADDRESS ******** */
 if (myContact.address.value==null ||
 myContact.address.value=== "" ||
 myContact.address.value.length >50 || !myContact.firstname.value.match(letters))
 errorMessages += "<p>Address must have letters and numbers </p>";
 else
 validFirstName = true;
  
  /*********** VALIDATES CITY ******** */
 if (myContact.city.value==null ||
 myContact.city.value=== "" ||
 myContact.city.value.length >50 || !myContact.firstname.value.match(letters))
 errorMessages += "<p>City is required </p>";
 else
 validFirstName = true;
  
 /*********** VALIDATES COUNTRIES ******** */
 if (myContact.countries.value==null ||
 myContact.countries.value=== "" ||
 myContact.countries.value.length >50 || !myContact.firstname.value.match(letters))
 errorMessages += "<p>Country is required </p>";
 else
 validFirstName = true;
 
  /*********** VALIDATES ZIPCODE ******** */
 if (myContact.zipcode.value==null ||
 myContact.zipcode.value=== "" ||
 myContact.zipcode.value.length >5 || !myContact.firstname.value.match(numbers))
 errorMessages += "<p>Zipcode must have 5 numbers and is required </p>";
 else
 validFirstName = true;
  
  
  
 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validUserPassword && validFirstName && validPhone && validLastName && validEmailAddress && validAddress && validCity && validCountries && validZipcode) ;
}
