document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  // fetch returns promises, when you get a response from a promise, you use .then
  fetch('test.txt')
    // Returning the text method within the response prototype, if we had to deal with JSON we'd use res.json()
    .then(res => res.text())
    // Catch that promise, then we get the data
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    // If file could not be found, display error in console
    .catch(err => console.log(err));
}

// Get local json data
function getJson() {

  fetch('posts.json')

    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(function(post){
        output += `<li>${post.title}</li>`
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

// Get from external API
function getExternal() {

  fetch('https://api.github.com/users')

    .then(res => res.json())
    .then(data => {
      // console.log(data);
      let output = '';
      data.forEach(function(user){
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

