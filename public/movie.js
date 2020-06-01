
OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=764b0a16
// or try trilogy as key


// pokemon example api04

document.getElementById('searchMovie').addEventListener('click', event => {
  event.preventDefault()
  console.log(document.getElementById('Movie').value)

  fetch(`https://${document.getElementById('Movie').value}/`)
    .then(r => r.json())
    .then(movie => {
      console.log(movie)
      let movieElem = document.createElement('div')
      movieElem.className = 'card'
      movieElem.style = 'width: 18rem;'
      movieElem.innerHTML = `
          <img 
            src="${}" 
            class="card-img-top" 
            alt="${}">
          <div class="card-body">
            <h5 class="card-title">
              ${}
            </h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                ${}: ${}
              </li>
              <li class="list-group-item">
                ${}: ${}
              </li>
              <li class="list-group-item">
                ${}: ${}
              </li>
              <li class="list-group-item">
                ${}: ${}
              </li>
              <li class="list-group-item">
                ${}: ${}
              </li>
              <li class="list-group-item">
                ${}: ${}
              </li>
            </ul>
          </div>
        `
      document.getElementById('').append(movieElem)
    })
    .catch(e => console.log(e))
})


// --------------------------------


// todo list example api04
const renderItems = () => {
  document.getElementById('items').innerHTML = ''
  for (let i = 0; i < items.length; i++) {
    let itemElem = document.createElement('li')
    itemElem.classList.add('list-group-item')
    itemElem.classList.add(items[i]._____ ? 'list-group-item-success' : 'list-group-item-secondary')
    itemElem.classList.add('d-flex', 'justify-content-between', 'align-items-center')
    itemElem.innerHTML = `
          ${items[i].____}
         
        `
    document.getElementById('items').append(itemElem)
  }
}

// -----------------------------------------

// starwars example api04

fetch('')
  .then(r => r.json())
  .then(movie => {
    console.log(movie)

    fetch(movie._______)
      .then(r => r.json())
      .then(_______ => {
        console.log(_______)
        document.getElementById('movie').innerHTML = `
          <div class="card-header">Star Wars</div>
          <div class="card-body">
            <h5 class="card-title">${movie.name}</h5>
            <p class="card-text">
            ${movie.title} text ${movie.cast} text ${movie.duration} text.
            </p>
            <p class="card-text">
            text ${movie.director}.
            </p>
          </div>
          `
      })
      .catch(e => console.log(e))
  })
  .catch(e => console.log(e))
