const express = require('express')
const userRoute = require('./routes/UserRoutes')

const app = express()
app.use(express.json())

app.use('/api/users',userRoute)

app.listen(3000,()=>{
    console.log("server listening");
})
