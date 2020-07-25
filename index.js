const express = require('express')
const { response } = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const morgan = require('morgan')
morgan.token('body', function (req, res) {
  return JSON.stringify(req.body)
})



app.use(express.json())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      },
      {
          "name": "Celil Tat",
          "number": "39-24-6423124",
          "id": 5
      }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

  app.get('/info', (req,res) => {
    res.write(`<p>This phonebook has ${persons.length} people</p>`);
    res.write(`<p>${new Date()}</p>`);
    res.end();
  })

  app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if(person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
    
  })

  app.delete("/api/persons/:id", (req, res) => {
      const id = Number(req.params.id)
      persons = person.filter(person => person.id !== id)
      
      res.status(204).end()
  })

  const generateId = () => {
    const randomId = Math.floor(Math.random() * 1000) +1 
    return randomId
  }
  
  app.post('/api/persons', (req, res) => {
    const {name, number} = req.body
    const nameMatch = persons.find(p => p.name === name)

    if(nameMatch) {
      return res.status(400).json({
        error: 'name must be unique'
      })
    }
    if(!name){
      return res.status(400).json({
        error: 'missing name'
      })
    }

    if(!number) {
      return res.status(400).json({
        error: 'missing number'
      })
    }

    const person = {name: name, number: number, id: generateId()}

    persons = persons.concat(person)
  
    response.json(person)
  })



  const PORT = process.env.PORT || 3001  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })