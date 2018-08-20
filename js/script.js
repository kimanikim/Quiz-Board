// var beverage = $("#beverage").val();

// var flavor = $("input:radio[name=flavor]:checked").val;

// var dob = $("#born").val();

// var favoriteColor = $("#color").val();

$(document).ready(function() {
  // $("#button").click(function() {
  //   $(".para1").slideToggle();
  // });

  function validateForm() {
    var x = document.forms["myForm"].value;
    if (x == null || x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
});
//   $(".btn2").click(function() {
//     $(".para1").show();
//   });

//   $("button").click(function() {
//     alert("I am a button");
//   });
// })
