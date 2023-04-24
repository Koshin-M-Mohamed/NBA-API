

const button = document.querySelector('button').addEventListener('click', makeRequest)

function makeRequest() {
    let userInput = document.querySelector('input').value

    fetch(`/api/${userInput}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#playerpos').textContent = data.position
            document.querySelector('#playerTeam').textContent = data.team
            document.querySelector('#playerPpg').textContent = data.pointsPerGame
            document.querySelector('#playerBirth').textContent = data.birthLocation
            document.querySelector('#playerPhoto').src = data.url;


        })
}

