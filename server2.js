const express = require('express')
const app = express()

const PORT = process.env.PORT;

if(!PORT) {
    throw new Error ('Port must be specified')
}

app.get('/', (req,res) => {
    console.log('oi')
    res.send(`Port: ${PORT}`)
})

    app.listen(PORT, () => console.log(`Started ${PORT}`))
