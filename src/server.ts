import express from 'express'

import { UsersController } from '@controllers/usersController'

const a = new UsersController()

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.status(200).send(`
    <html>
      <head></head>
      <body>
        <h1>Funcionou!</h1>
        <p>Hello world os typescript building!</p>
      </body>
    </html>
  `)
})

app.get('/get', (req, res) => {
  res.status(200).send({ message: 'String default response' })
})

app.listen(port, () => {
  console.log(`Server is runing on http://localhost:${port}`)
})
