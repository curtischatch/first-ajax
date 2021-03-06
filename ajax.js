document.addEventListener("DOMContentLoaded", function() {

  //retrieves information at the root path of the server, by sending an empty JavaScript object, and expecting a test response.
  /* Your code goes here */

  var requestbtn= document.querySelector('#step12 button')
  var pingPongbtn= document.querySelector('#step3456 button')
  var countbtn = document.querySelector('#step7 button')
  var timebtn = document.querySelector('#step8 button')
  var carbtn = document.querySelector('#step9 button')

  requestbtn.addEventListener('click', function() {
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    })
  })

  // pingPongbtn.addEventListener('click', function() {
  //   console.log("here") //debug
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

  // pingPongbtn.addEventListener('click', function() {
  //   $.ajax({
  //     url: 'http://first-ajax-api.herokuapp.com/pong',
  //     method: 'GET',
  //     dataType: 'text',
  //   }).fail(function () {
  //     console.log(responseData);
  //     step3456.append("Requst failed, I will try harder next time");
  //   })
  // })

  // pingPongbtn.addEventListener('click', function() {
  //   $.ajax({
  //     url: 'http://first-ajax-api.herokuapp.com/ping',
  //     method: 'GET',
  //     dataType: 'text',
  //   }).always(function () {
  //     console.log('always alalala');
  //     step3456.append("Hey the request fini");
  //   })
  // })

  // Root and Pong Button

  pingPongbtn.addEventListener('click', function() {
    // console.log("here") //debug
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',
    }).done(function (responseData) {
      console.log(responseData);
      step3456.append("Yay we did it!")
    }).fail(function () {
      console.log('lalala fail fail')
      step3456.append("That did not go well.")
    }).always(function() {
      console.log('function is running always')
      step3456.append("All I know is, it's over.")
    });
  })

  // Random Count Button

  countbtn.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text',
    }).done(function(responseData) {
      console.log(responseData)
      step7.append(responseData)
    });
  })

  // Time Button

  timebtn.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'Asia/Kolkata'},
      dataType: 'text',
    }).done(function(responseData) {
      console.log(responseData)
      step8.append(responseData)
    });
  })

  // HTML Car Request

  carbtn.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      data: {},
      dataType: 'html',
    }).done(function(responseData) {
      $("#cars").append(responseData)
    });
  })





});
