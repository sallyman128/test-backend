const express = require('express')

const app = express();

app.get('/', (req, res) => {
  console.log('First request')
  res.send('First Request!!!');
})

app.get('/users', (req, res) => {
  let users = ["Salmaan", "Ammar", "Arsalaan"] 
  res.send({
    users: users
  });
})

app.listen(3000, () => {
  console.log('Listening to 3000')
})

