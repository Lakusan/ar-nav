var commentsData;
  
const getCommentsData = () => {
  sendHttpRequest('GET', 'http://127.0.0.1:3005/locations').then(responseData => {
    commentsData= responseData;     
  });
};