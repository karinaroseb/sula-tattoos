/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
var $form = $('form#test-form'),
 url = 'https://script.google.com/macros/s/AKfycbyoajJEJODTb4jN-KcJAnp7j-w-Odbn6UCtqJGMDIggOpbVWNtpkfB3KretRwJ1QgrY/exec'

$('#submit-form').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
  url: url,
  method: "GET",
  dataType: "json",
  data: $form.serializeObject()
}).success(
  // do something
);
})