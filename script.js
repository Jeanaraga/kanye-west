function getRandomJoke() {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => {
            const jokeElement = document.getElementById('citacao');
            jokeElement.textContent = '" '+ data.quote + ' "';
        })
        .catch(error => {
            console.error('Erro:', error);
        });
};