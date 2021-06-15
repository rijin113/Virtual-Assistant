function weatherOfCities(intentRequest, callback) {
    const http = require('http');
    var cityName = intentRequest.currentIntent.slots.CityName;
    var options = {
        method: 'GET',
        host: 'api.openweathermap.org',
        path: '/data/2.5/weather?q=' + cityName + 'APICODE',
        headers: {
          'accept': 'application/json',
        }
      };
      var dataStr = '';
      const req = http.request(options, function (response) {
        response.on('data', data => {
            dataStr = JSON.parse(data);
            var temperature = (dataStr.main.temp - 273.15).toFixed(2);
            var humidity = dataStr.main.humidity;
            var pressure = dataStr.main.pressure;
            var responseText = 'Temperature in ' + cityName + ' is ' + temperature + '\xB0 celsius.';
            responseText += '\x0a Humidity in ' + cityName + ' is ' + humidity + '\%.';
            responseText += '\x0a Pressure in ' + cityName + ' is ' + pressure + ' hPA.';
             callback(close(intentRequest.sessionAttributes, 'Fulfilled',
          {
              contentType: 'PlainText',
              content: responseText
          }));
        });
        //response.on('end', () => dataStr = JSON.parse(dataStr));
      }).on('error', err => {
          console.log(err);
          callback(close(intentRequest.sessionAttributes, 'Fulfilled',
          {
              contentType: 'PlainText',
              content: 'Oops. Something went wrong with getting weather information for ' + cityName
          }));
      });
      req.end();
    
}
 
 function Conditionincities (intentRequest,callback) {
     const http = require('http');
    var cityName = intentRequest.currentIntent.slots.CityName;
    var options = {
        method: 'GET',
        host: 'api.openweathermap.org',
        path: '/data/2.5/weather?q=' + cityName + 'APICODE',
        headers: {
          'accept': 'application/json',
        }
      };
      var dataStr = '';
      const req = http.request(options, function (response) {
        response.on('data', data => {
            dataStr = JSON.parse(data);
            var condition= dataStr.wind.speed;
          
            var responseText = 'The wind speed in ' + cityName + ' is ' + condition + ".";
           
             callback(close(intentRequest.sessionAttributes, 'Fulfilled',
          {
              contentType: 'PlainText',
              content: responseText
          }));
        });
        //response.on('end', () => dataStr = JSON.parse(dataStr));
      }).on('error', err => {
          console.log(err);
          callback(close(intentRequest.sessionAttributes, 'Fulfilled',
          {
              contentType: 'PlainText',
              content: 'Oops. Something went wrong with getting weather information for ' + cityName
          }));
      });
      req.end();
    

 }
 function tempmaxincities (intentRequest,callback) {
      const http = require('http');
    var cityName = intentRequest.currentIntent.slots.CityName;
    var options = {
        method: 'GET',
        host: 'api.openweathermap.org',
        path: '/data/2.5/weather?q=' + cityName + 'APICODE',
        headers: {
          'accept': 'application/json',
        }
      };
      var dataStr = '';
      const req = http.request(options, function (response) {
        response.on('data', data => {
            dataStr = JSON.parse(data);
            var temp2= (dataStr.main.temp_max - 273.15).toFixed(2);
          
            var responseText = 'The maximum temp in ' + cityName + ' is ' + temp2 +'\xB0 celsius';
           
             callback(close(intentRequest.sessionAttributes, 'Fulfilled',
          {
              contentType: 'PlainText',
              content: responseText
          }));
        });
        //response.on('end', () => dataStr = JSON.parse(dataStr));
      }).on('error', err => {
          console.log(err);
          callback(close(intentRequest.sessionAttributes, 'Fulfilled',
          {
              contentType: 'PlainText',
              content: 'Oops. Something went wrong with getting weather information for ' + cityName
          }));
      });
      req.end();
    
     
 }
  
  function tempminincities (intentRequest,callback) {
       const http = require('http');
    var cityName = intentRequest.currentIntent.slots.CityName;
    var options = {
        method: 'GET',
        host: 'api.openweathermap.org',
        path: '/data/2.5/weather?q=' + cityName + 'APICODE',
        headers: {
          'accept': 'application/json',
        }
      };
      var dataStr = '';
      const req = http.request(options, function (response) {
        response.on('data', data => {
            dataStr = JSON.parse(data);
            var temp3= (dataStr.main.temp_min - 273.15).toFixed(2);
          
            var responseText = 'The minimum temp in ' + cityName + ' is ' + temp3 +'\xB0 celsius';
           
             callback(close(intentRequest.sessionAttributes, 'Fulfilled',
          {
              contentType: 'PlainText',
              content: responseText
          }));
        });
        //response.on('end', () => dataStr = JSON.parse(dataStr));
      }).on('error', err => {
          console.log(err);
          callback(close(intentRequest.sessionAttributes, 'Fulfilled',
          {
              contentType: 'PlainText',
              content: 'Oops. Something went wrong with getting weather information for ' + cityName
          }));
      });
      req.end();
      
  }

 
// --------------- Intents -----------------------

/**
 * Called when the user specifies an intent for this skill.
 */
function dispatch(intentRequest, callback) {
    console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);

    const intentName = intentRequest.currentIntent.name;

    // Dispatch to your skill's intent handlers
    if (intentName === 'WeatherOfCities') {
        return weatherOfCities(intentRequest, callback);
    } 
    else if (intentName === 'ConditioninCities') {
        return Conditionincities (intentRequest,callback);
    }
    else if (intentName === 'tempmax') {
        return tempmaxincities (intentRequest,callback);
    }
    else if (intentName === 'tempmin') {
        return tempminincities (intentRequest,callback);
    }
   
    throw new Error(`Intent with name ${intentName} not supported`);
}