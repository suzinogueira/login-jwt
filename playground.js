//apenas treinando como funciona o bcrypt

const bcrypt = require('bcryptjs')

const password = 'meu password'

const dbSavedPassword =
  '$2a$14$h0wSzIyHQ1t2aPen5tjHpujvB9hBAViPiSwuynnn4tjwNGOv9vMZm'
//desincripando
bcrypt.compareSync(password, dbSavedPassword)

//encriptando
// const salt = bcrypt.genSaltSync(14)

// const cryptPassword = bcrypt.hashSync(password, salt)

console.log(bcrypt.compareSync(password, dbSavedPassword))

//testando token

const jwt = require('jsonwebtoken')

// criando o token:
const user = {
  id: '20',
  name: 'João',
  username: 'joao@gmail.com',
  password: '123456'
}
// //composição: dados do usuário que quer ter no token + segredo + tempo de expiração(em segundos)
const secret = 'idhaisdhoadh234294fkdjf'
function createToken() {
  const token = jwt.sign({ id: user.id, username: user.username }, secret, {
    expiresIn: 40
  })
  console.log(token)
}

// testando o token
function testToken(token) {
  try {
    const validData = jwt.verify(token, secret)
    console.log(validData)
  } catch (error) {
    console.log(error)
  }
}

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGdtYWlsLmNvbSIsImlhdCI6MTYzNTgxNzI0NiwiZXhwIjoxNjM1ODE3Mjg2fQ.AHXbIPmFSTEWBsENycmbvT8-sTqzw3iLfEV3aCefxaE'

// createToken()
testToken(token)
