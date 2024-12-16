function validateForm()
{
const fname=document.getElementById("fname").value.trim();
const lname=document.getElementById("lname").value.trim();
const usrn=document.getElementById("usrn").value.trim();
const pwd=document.getElementById("pwd").value.trim();
const cpwd=document.getElementById("cpwd").value.trim();
const gender=document.querySelector('input[name="gender"]:checked');
const mob=document.getElementById("mob").value.trim();
const address=document.getElementById("address").value.trim();
const email=document.getElementById("email").value.trim();
if(fname===" ")
{
alert("First name cannot empty");
return false;
}
if(lname===" ")
{
alert("Last name cannot empty");
return false;
}
if(usrn===" ")
{
alert("Username cannot empty");
return false;
}
if(pwd.length<6)
{
alert("Password must be at least 6 characters long");
return false;
}
if(pwd!==cpwd)
{
alert("Password do not match");
return false;
}
if(!gender)
{
alert("Please select your gender");
return false;
}
if(!/^\d{10}$/.test(mob))
{
alert("Mobile number must be 10 digits long");
return false;
}
if(address===" ")
{
alert("Address cannot empty");
return false;
}
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)){
alert("Please enter a valid email address");
return false;
}
alert("Form submitted successfully!");
return false;
}