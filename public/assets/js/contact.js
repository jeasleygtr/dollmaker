$(document).ready(function(){
    // $("#thank-you-message").hide();
  // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCxFFQmbxY1xxtM_SevtW0McsTTXZKj6HQ",
    authDomain: "dollmaker-16da1.firebaseapp.com",
    databaseURL: "https://dollmaker-16da1.firebaseio.com",
    projectId: "dollmaker-16da1",
    storageBucket: "",
    messagingSenderId: "1029632033652"
  };
  firebase.initializeApp(config);
    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Values
    var name = "";
    var email = "";
    var comment = "";

    // Capture Button Click
    $(".btn-flat").on("click", function() {
        // Don't refresh the page!
        event.preventDefault();

        //Providing data to Firebase
        name = $("#name-input").val().trim();
        email = $("#email-input").val().trim();
        comment = $("#comment-input").val().trim();

        var userComment = {
            comment: comment,
            email: email,
            name: name
            
        };

        database.ref().push(userComment);
        console.log(name);
        console.log(email);
        console.log(comment);
        // var postSubmit = $("#form-wrapper").hide();
        // var thankYou = $("<h1>").text("Thank you for your comment! We will respond to you as soon as possible.");
        // $("#thank-you-message").append(thankYou)
        // $("#thank-you-message").show();

        name = $("#name-input").val("");
        email = $("#email-input").val("");
        comment = $("#comment-input").val("");
    });
});