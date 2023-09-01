function chat() {
   alert("Good morning Philippines");

   const myName = prompt("What is your name?");
   alert("Hello,"+ myName + "!");

   const subject = prompt("Do you like our place?");
   if (subject == "Yes") {
      alert("This place is amazing!");
   }
   else if (subject == "No"){
      alert("Curious");
   }
   else {
      alert("Explore");
   }
}