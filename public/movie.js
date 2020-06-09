// require('dotenv').config()


// ---------------------------------------------------------------------------
// signUp card hide /show
function hideSignUp() {
  if (document.getElementById('signUp').classList[1] === 'hide' && document.getElementById('login').classList[1] === 'hide') {
    document.getElementById('signUp').classList.remove('hide')
  }
  else if (document.getElementById('signUp').classList[1] === 'hide' && document.getElementById('login').classList[1] !== 'hide') {
    document.getElementById('login').classList.add('hide')
    document.getElementById('signUp').classList.remove('hide')
  }
  else {
    document.getElementById('signUp').classList.add('hide')
  }
}

// login card hide/show
function hideLogin() {
  if (document.getElementById('login').classList[1] === 'hide' && document.getElementById('signUp').classList[1] === 'hide') {
    document.getElementById('login').classList.remove('hide')
  }
  else if (document.getElementById('login').classList[1] === 'hide' && document.getElementById('signUp').classList[1] !== 'hide') {
    document.getElementById('signUp').classList.add('hide')
    document.getElementById('login').classList.remove('hide')
  }
  else {
    document.getElementById('login').classList.add('hide')
  }
}

// removes login and signup buttons and displays username(given) and a log out button
function displayUser(username) {
  document.getElementById('loginBtn').classList.add('hide')
  document.getElementById('signUpBtn').classList.add('hide')
  document.getElementById('userDisp').classList.remove('hide')
  document.getElementById('logOutBtn').classList.remove('hide')
  document.getElementById('userDisp').innerHTML = `Hello ${username}`
  username = document.getElementById('username').value = ''
  document.getElementById('first_name').value = ''
  document.getElementById('last_name').value = ''
}
function logOut() {
  document.getElementById('loginBtn').classList.remove('hide')
  document.getElementById('signUpBtn').classList.remove('hide')
  document.getElementById('userDisp').classList.add('hide')
  document.getElementById('logOutBtn').classList.add('hide')
  document.getElementById('userDisp').innerHTML = ``
  localStorage.clear()
}
if(localStorage.user !== undefined){
let use =(JSON.parse(localStorage.user))
console.log(JSON.stringify(use.username))
  displayUser(use.username)
}


// writes post to database
let post = {}
function postToDB(postObject) {
  axios.post('/api/posts', postObject)
    .then(({ data }) => console.log(data))
    .catch(e => console.error(e))
}

// event listeners for sign up and login

document.getElementById('signUpBtn').addEventListener('click',event=>{hideSignUp()})
document.getElementById('loginBtn').addEventListener('click', event => {hideLogin()})
document.getElementById('logOutBtn').addEventListener('click', event =>{logOut()})


document.getElementById('signUpForm').addEventListener('submit', function(event) {

  event.preventDefault()

  var first_name = event.target.first_name.value;
  var last_name = event.target.last_name.value;
  var username = event.target.username.value;

  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      first_name,
      last_name,
      username,
    })
    
  })
  .then(response => response.json())
  .then(user => localStorage.setItem('user', JSON.stringify(user)))
  .catch(err => {
    console.error(err);
  });
  displayUser(username)
  document.getElementById('signUp').classList.add('hide')
  localStorage.getItem("user")
});

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = event.target.username.value;
  fetch(`/api/users/${username}`)
      .then(function(response) {
          return response.json();
      })
      .then(function(user) {
        if (user === null){
          document.getElementById('noUser').innerHTML='Not a valid username'
        }
        else{
          console.log(user);
          localStorage.setItem('user', JSON.stringify(user));
          // window.location.href = '/';
          displayUser(username)
          document.getElementById('login').classList.add('hide')
      }})
  document.getElementById('user').value = ''
})

// Takes input from the searchbar and runs it though ombd api to return movie cards w/ basic info and poster
// document.getElementById('searchBtn').addEventListener('click', event => {
//   event.preventDefault() test
// }

// instead of OMDB, we will fetch 'api/search/${newSearch}/${postBody}'

  //     let movieElem = document.createElement('div')
  //     movieElem.className = 'card'
  //     movieElem.style = 'width: 18rem;'
  //     movieElem.innerHTML = `
  //   <div class="col s12 m7">
  //     <div class="card">
  //       <div class="card-image">
  //         <img src="${Data.poster}">
  //         <span class="card-title grey darken-3 text-white">${Data.title}</span>
  //       </div>
  //       <div class="card-content">
  //         <ul class="list-group list-group-flush" id='movieCard'>
  //             <li class="list-group-item">
  //               <h6>Actors:</h6>
  //               <p> ${Data.actors}</p>
  //             </li>
  //             <li class="list-group-item">
  //               <h6>Director:</h6> 
  //               <p>${Data.director}</p>
  //             </li>
  //             <li class="list-group-item">
  //               <h6>Plot:</h6> 
  //               <p>${Data.plot}</p>
  //             </li>
  //             <li class="list-group-item">
  //               <h6>Rating:</h6> 
  //               <p>${Data.mpaaRating}</p>
  //             </li>
  //           </ul>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //       `
  //     document.getElementById('newMovie').append(movieElem)
  //     document.getElementById('searchContent').value = ''
  //     post = {
  //       title: Data.Title,
  //       poster: Data.Poster,
  //       director: Data.Director,
  //       genre: Data.Genre,
  //       starring: Data.Actors,
  //       plot: Data.Plot,
  //       mpaaRating: Data.Rated,
  //       body: document.getElementById('postBody').value, // needs to be defined earlier
  //       userId: 1
  //     }
  //   })
//     .then(() => { // do not do
//       postToDB(post)
//     })
//     .catch(e => console.log(e))
// })
