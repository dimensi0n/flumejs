const fetch = require('node-fetch')

let token = 'yourtoken'

function SetToken(NewToken) {
    token = NewToken
}

async function Signup(username, password) {
    let init = {
        method: 'POST',
        headers: {
            token: token
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: 'erwan.roussel51@gmail.com'
        })
    }
    let res = await fetch('http://localhost:8080/auth/signup', init)
    return res
}

async function Login(username, password) {
    let init = {
        method: 'GET',
        headers: {
            token: token
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    }
    let res = await fetch('http://localhost:8080/auth/login', init)
    return res
}

async function Disconnect(username, password) {
    let init = {
        method: 'GET',
        headers: {
            token: token
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    }
    let res = await fetch('http://localhost:8080/auth/disconnect', init)
    return res
}

async function Delete(username, password) {
    let init = {
        method: 'DELETE',
        headers: {
            token: token
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    }
    let res = await fetch('http://localhost:8080/auth/delete', init)
    return res
}

async function AllUsers() {
    let init = {
        method: 'GET',
        headers: {
            token: token
        },
    }
    let res = await fetch('http://localhost:8080/auth/all', init)
    return res
}

async function NewDb(name, content) {
    let init = {
        method: 'POST',
        headers: {
            token: token
        },
        body: JSON.stringify({
            name: name,
            content: content
        })
    }
    let res = await fetch('http://localhost:8080/db/create', init)
    return res
}

async function GetDb(name) {
    let init = {
        method: 'GET',
        headers: {
            token: token
        }
    }
    let res = await fetch('http://localhost:8080/db/read/'+name, init)
    return res
}

async function UpdateDb(name, content) {
    let init = {
        method: 'PUT',
        headers: {
            token: token
        },
        body: JSON.stringify({
            name: name,
            content: content
        })
    }
    let res = await fetch('http://localhost:8080/db/write', init)
    return res
}

module.exports = {Signup: Signup, Login: Login, Disconnect: Disconnect, Delete: Delete}