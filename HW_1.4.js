var firstName = 'UserName'
var greetings = 'Hello'

//Function Declaration
function HelloUser() {
    return (`${greetings}, ${firstName}!`)
}

HelloUser()

//Function Expression
var firstName = 'UserName'
var greetings = 'Hello'

var HelloUser = function() {
    return (`${greetings}, ${firstName}!`)
}

HelloUser()
