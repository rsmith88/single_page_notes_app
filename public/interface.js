$(document).ready(function() {
  $('#namesButton').click(function() {
    $.get('https://async-workshops-api.herokuapp.com/people', function(data) {
      var string = ""
      for (var i = 0; i < data.length; i++) {
        string += (data[i].name + ", ")
      }
    $('#names').text(string.slice(0, -2));
    });
  });
});
