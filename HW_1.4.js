var firstName = 'UserName'
var greetings = 'Hello'

//Function Declaration
function HelloUser() {
    console.log(`${greetings}, ${firstName}!`)
}

HelloUser()

//Function Expression
var firstName = 'UserName'
var greetings = 'Hello'

var HelloUser = function() {
    console.log(`${greetings}, ${firstName}!`)
}

HelloUser()
