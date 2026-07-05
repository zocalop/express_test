
let express = require('express');
let app = express();

app.get('temperature/:location_code', function(request, response){
  let location = request.params.location_code;
  weather.current(location, function(error, temp_f) {
    ...
  });
});

let server = app.listen(port, function(){
  console.log('listening on URL http://localhost:${port}');
})
