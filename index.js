function Chat () {
     alert("Good Morning Philippines!");

     const myName = prompt("What is your name?");

     alert("Hello,"+ myName + "!");

     const subject = prompt("Do you like our place?");

     if (subject == "Yes"){

        alert("This place is amazing!");
     }

      else if(subject == "No") {

        alert("New place");
    }
       else {
        alert("Explore");
       }
}