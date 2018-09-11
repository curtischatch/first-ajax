document.addEventListener("DOMContentLoaded", function() {

  //retrieves information at the root path of the server, by sending an empty JavaScript object, and expecting a test response.
  /* Your code goes here */

  var requestbtn= document.querySelector('button')

  requestbtn.addEventListener('click', function() {
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: {},
      dataType: 'text'
    })
  })


});
