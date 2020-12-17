console.log('Client side JS file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message_one')
const messageTwo = document.querySelector('#message_two')

weatherForm.addEventListener('submit', (e)=> {

    e.preventDefault();

    const searchLocation = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address='+searchLocation).then((response)=> {
    response.json().then(({error, location, forecast}) => {
        if(error){
            messageOne.textContent = error
        }else{
            messageOne.textContent = location
            messageTwo.textContent = forecast
        }
    })
})
})