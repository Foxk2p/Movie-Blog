
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=764b0a16
// or try trilogy as key

http://www.omdbapi.com/?t=remember_the_titans&apikey=764b0a16

// ---------------------------------------------------------------------------

document.getElementById('searchMovie').addEventListener('click', event => {
  event.preventDefault()
  console.log(document.getElementById('Movie').value)
  let Search = document.getElementById('Movie').value
  let newSearch = ""
  for (let i = 0; i < Search.length; i++) {
    if (Search.charAt(i) === ' ') {
      newSearch += '_'
    }
    else {
      newSearch += Search.charAt(i)
    }
  }

  fetch(`http://www.omdbapi.com/?t=${newSearch}&apikey=764b0a16`)
    .then(r => r.json())
    .then(Data => {
      console.log(Data)
      let movieElem = document.createElement('div')
      movieElem.className = 'card'
      movieElem.style = 'width: 18rem;'
      movieElem.innerHTML = `
          <img 
            src="${Data.Poster}" 
            class="card-img-top" 
            alt="${Data.Title}">
          <div class="card-body">
            <h5 class="card-title">
              ${Data.Title}
            </h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                ${Data.Actors}
              </li>
              <li class="list-group-item">
                ${Data.Director}
              </li>
              <li class="list-group-item">
                ${Data.Plot}
              </li>
              <li class="list-group-item">
                ${Data.Rated}
              </li>
              <li class="list-group-item">
                ${Data.Year}
              </li>
            </ul>
          </div>
        `
      document.getElementById('newMovie').append(movieElem)
    })
    .catch(e => console.log(e))
})


// ---------------------------------------------------------------
// // todo list example api04

// const renderItems = () => {
//   document.getElementById('items').innerHTML = ''
//   for (let i = 0; i < items.length; i++) {
//     let itemElem = document.createElement('li')
//     itemElem.classList.add('list-group-item')
//     itemElem.classList.add(items[i]._____ ? 'list-group-item-success' : 'list-group-item-secondary')
//     itemElem.classList.add('d-flex', 'justify-content-between', 'align-items-center')
//     itemElem.innerHTML = `
//           ${items[i].____}

//         `
//     document.getElementById('items').append(itemElem)
//   }
// }
