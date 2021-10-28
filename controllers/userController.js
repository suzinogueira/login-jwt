const userController = {
  register: function (req, res) {
    console.log('register')
    res.send('Register')
  },
  login: function (req, res) {
    console.log('login')
    res.send('Login')
  }
}

module.exports = userController
