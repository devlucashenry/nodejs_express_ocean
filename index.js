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

const lista = ['Rick Sanchez', 'Morty Smith', 'Beth Smith']

app.get('/personagens', (req, res) => {
  res.send(lista)
})

app.get('/personagens/:id', (req, res) => {
  const id = req.params.id
  res.send(id)
})


app.use(express.json())

app.post('/personagens', (req,res)=> {
  const novoPersonagem = req.body.nome

  lista.push(novoPersonagem)

  res.send("novo personagem adds")
})


app.put('/personagens/:id', (req,res) => {
  const id = req.params.id
  const nomeAtualizado = req.body.nome

  lista[id - 1 ] = nomeAtualizado

  res.send("Atualizado!")
})



app.delete('/personagens/:id', (req,res) => {
  const id = req.params.id

  lista.splice(id - 1, 1)
  res.send("removido!")
})








app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})