const getTokenElement = document.getElementById('getToken');
getTokenElement.onclick = function() {
  const codeElement = document.getElementById('code');
  const resultElement = document.getElementById('result');
  const codeValue =  codeElement.value;
  const lambdaURL = 'https://i3h9xwqk5g.execute-api.us-east-1.amazonaws.com/dev/api/token/' + codeValue;
  fetch(lambdaURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      resultElement.innerText = JSON.stringify(json);
    });
}
