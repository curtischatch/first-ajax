document.addEventListener("DOMContentLoaded", function() {

  //retrieves information at the root path of the server, by sending an empty JavaScript object, and expecting a test response.
  /* Your code goes here */

  var requestbtn= document.querySelector('#step12 button')

  var  pingPongbtn = document.querySelector('#step3456 button')

  requestbtn.addEventListener('click', function() {
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    })
  })

  // pingPongbtn.addEventListener('click', function() {
  //   console.log("here")
  //   $.ajax({
  //     url: 'http://first-ajax-api.herokuapp.com/ping',
  //     method: 'GET',
  //     dataType: 'text',
  //   }).done(function (responseData) {
  //     console.log(responseData);
  //     step3456.append(responseData);
  //     console.log('request successful');
  //   })
  // })

  pingPongbtn.addEventListener('click', function() {
    console.log("here")
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text',
    }).fail(function (responseData) {
      console.log(responseData);
      step3456.append("Requst failed, I will try harder next time");
    })
  })

});
