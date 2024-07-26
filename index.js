const express = require('express')
const app = express()

// mongodb+srv://mateoschiro8:8Mz5uDaawXrshSsv@cluster0.gtwihqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note) 
        response.json(note)
    else
        response.status(404).end()  
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})  