const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>100)
});

const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
  // Toggle the 'activee' class on the nav list to show/hide it
  menuIcon.classList.toggle("bx-x");
  navList.classList.toggle('activee');
});







function sendMail(){
    var params = {
        from_name : document.getElementById("fullname").value ,
        email_id : document.getElementById("email_id"). value ,
        message : document.getElementById("message").value
    }
    emailjs.send("service_ojcnzur", "template_mtqx4wg", params)
     .then(
         message => {
           if(message != "OK"){
               swal("Successful", "You clicked the button!", "success");
           }
           else{
               swal("Error", "You clicked the button!", "Error");
           }
         }
       )
    .then(function(res){
        alert("Success! " + res.status);
    })
}









