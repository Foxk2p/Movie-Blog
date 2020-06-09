let users = []
let posts = []
let comments = []

function getAllUsers() {
  axios.get('/api/users')
    .then(({ data }) => {
      users = data
    })
    .then(() => getAllPosts())
    .catch(e => console.error(e))
}

function getAllPosts() {
  axios.get('/api/posts')
    .then(({ data }) => {
      posts = data
    })
    .then(() => displayInfo())
    .catch(e => console.error(e))
}


function displayInfo() {
  users.forEach(user => {
    let elem = document.createElement('p')
    // elem.classList.add()
    elem.innerHTML = `${user.username}`
    // document.getElementById('users').append(elem)
  })
  posts.forEach(post => {
    thisUser = ''
    axios.get(`/api/users/${post.name}`)
      .then(({ data }) => {
        console.log(data.username)
        thisUser = data.username
      })
      .then(() => {
        let elem = document.createElement('div')
        elem.innerHTML = `
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="${post.poster}">
          <span class="card-title grey darken-3 text-white">${post.title}</span>
        </div>
        <div class="card-content">
          <ul class="list-group list-group-flush" id='movieCard'>
              <li class="list-group-item">
                <h6>Actors:</h6>
                <p> ${post.starring}</p>
              </li>
              <li class="list-group-item">
                <h6>Director:</h6> 
                <p>${post.director}</p>
              </li>
              <li class="list-group-item">
                <h6>Plot:</h6> 
                <p>${post.plot}</p>
              </li>
              <li class="list-group-item">
                <h6>Rating:</h6> 
                <p>${post.mpaaRating}</p>
              </li>
              <li class="list-group-item">
                <h6>Post:</h6> 
                <p>${post.body}</p>
              </li>
              <li class="list-group-item">
                <h6>User:</h6>
                <p>${post.userId}</p>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>`
        document.getElementById('posts').append(elem)
      })
      .catch(e => console.error(e))
  })
}
getAllUsers()

document.getElementById('searchBtn').addEventListener('click', event => {
  event.preventDefault()
  console.log('click')
  const search = document.getElementById('searchContent').value
  const toPost = document.getElementById('postBody').value
  const currentUser = JSON.parse(localStorage.user)
  axios.get(`/api/search/${search}/${toPost}/${currentUser.id}`)
    .then(({ data }) => {
      let elem = document.createElement('div')
      elem.innerHTML = `
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="${data.poster}">
          <span class="card-title grey darken-3 text-white">${data.title}</span>
        </div>
        <div class="card-content">
          <ul class="list-group list-group-flush" id='movieCard'>
              <li class="list-group-item">
                <h6>Actors:</h6>
                <p> ${data.starring}</p>
              </li>
              <li class="list-group-item">
                <h6>Director:</h6> 
                <p>${data.director}</p>
              </li>
              <li class="list-group-item">
                <h6>Plot:</h6> 
                <p>${data.plot}</p>
              </li>
              <li class="list-group-item">
                <h6>Rating:</h6> 
                <p>${data.mpaaRating}</p>
              </li>
              <li class="list-group-item">
                <h6>Post:</h6> 
                <p>${data.body}</p>
              </li>
              <li class="list-group-item">
                <h6>User:</h6>
                <p>${users[data.userId - 1].username}</p>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>`
      document.getElementById('posts').append(elem)
      document.getElementById('postBody').value = ''
      document.getElementById('searchContent').value = ''
    })
    .catch(e => console.error(e))
})
    // movie object reference from movie.js
      // <div class="card-content">
        // <ul class="list-group list-group-flush" id='movieCard'>
          // <li class="list-group-item">
            // <h6>Actors:</h6>
            // <p> ${Data.Actors}</p>
            // </li>
          // <li class="list-group-item">
            // <h6>Director:</h6>
            // <p>${Data.Director}</p>
            // </li>
          // <li class="list-group-item">
            // <h6>Plot:</h6>
            // <p>${Data.Plot}</p>
            // </li>
          // <li class="list-group-item">
            // <h6>Rating:</h6>
            // <p>${Data.Rated}</p>
            // </li>
          // <li class="list-group-item">
            // <h6>Year:</h6>
            // <p>${Data.Year}</p>
            // </li>
          // </ul>
        // </div>