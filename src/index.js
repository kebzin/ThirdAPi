const express = require('express')
const app = express()
const dotenv = require('dotenv')

const  {connection}  = require('./server');
const userRouter = require('./routers/users');
const categoryRouter = require('./routers/category')
const propertyRouter = require('./routers/property')
const locationRouter = require('./routers/location')
const authRouter = require('./routers/auth');


// auther authentication 
const cors = require('cors');
const cookieParser = require('cookie-parser');


// middleware
app.use(express.json())
// app.use(cors())
// app.use(cookieParser())

const PORT = 3005



//  connect to the database
connection()

// routers

app.use('/api/user', userRouter)
app.use('/api/categories', categoryRouter)
app.use('/api/category', propertyRouter)
app.use('/api/location', locationRouter)
app.use('/api/auth', authRouter)





app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`listenning on port: ${PORT}`)
})
