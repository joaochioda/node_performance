const express = require('express')
const cluster = require('cluster')
const os = require('os')

const app = express()

const numCpu = os.cpus().length;

app.get('/', (req,res) => {
    res.send('ok')
    cluster.Worker.kill()
})

cluster.on('exit', (worker, code ,signal) => {
    cluster.fork()
})

if(cluster.isMaster) {
    for (let i=0;i<numCpu;i++){
        cluster.fork()
    }
} else {
    app.listen(3000, () => console.log(`Started ${process.pid} port 3000`))
}
