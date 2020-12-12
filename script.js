const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const winner = document.getElementById('winner')

const outcomes = ['You', 'Tie', 'Computer']


rock.addEventListener('click', () => {
    winner.textContent = `Winner: ${outcomes[Math.floor(Math.random() * outcomes.length)]}`
})
paper.addEventListener('click', () => {
    winner.textContent = `Winner: ${outcomes[Math.floor(Math.random() * outcomes.length)]}`
})
scissors.addEventListener('click', () => {
    winner.textContent = `Winner: ${outcomes[Math.floor(Math.random() * outcomes.length)]}`
})