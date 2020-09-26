  var locationsData;
  
  const getLocationsData = () => {
    sendHttpRequest('GET', 'http://127.0.0.1:3005/locations').then(responseData => {
      locationsData= responseData;     
    });
  };


  