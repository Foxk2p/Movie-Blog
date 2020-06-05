document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = event.target.username.value;
    fetch(`/user/${username}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(user) {
            console.log(user);
            localStorage.setItem('user', user);
            window.location.href = '/';
        })
})


// brings back info to console 
// localStorage.getItem('user')