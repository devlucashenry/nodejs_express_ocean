{/* Criar um servidor na web */}

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/oi', (req, res) => {
  res.send('Olá Mundo no Front!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})