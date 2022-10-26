const express = require('express')
const app = express()
const dotenv = require('dotenv')

const { connection } = require('./server');
const router = require('./routers/routers');


app.use(express.json())
const PORT = 3005
app.use(express.json())


//  connect to the database
connection()

// routers
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`listenning on port: ${PORT}`)
})
